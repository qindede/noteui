"use client"

import * as React from "react"
import type { PanelImperativeHandle } from "react-resizable-panels"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/bases/base/ui/input-group"
import { Separator } from "@/registry/bases/base/ui/separator"
import { SettingsDialog } from "@/registry/bases/radix/blocks/sidebar-13/components/settings-dialog"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/radix/ui/collapsible"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/bases/radix/ui/resizable"
import { ScrollArea } from "@/registry/bases/radix/ui/scroll-area"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/bases/radix/ui/sidebar"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export default function SidebarInsetExample() {
  const [settingsOpen, setSettingsOpen] = React.useState(false)
  const leftPanelRef = React.useRef<PanelImperativeHandle | null>(null)

  const handleSidebarTriggerClick = React.useCallback(() => {
    if (!leftPanelRef.current) return

    if (leftPanelRef.current.isCollapsed()) {
      leftPanelRef.current.expand()
      return
    }

    leftPanelRef.current.collapse()
  }, [])

  const data = {
    tree: [
      [
        "app",
        [
          "api",
          ["hello", ["route.ts"]],
          "page.tsx",
          "layout.tsx",
          ["blog", ["page.tsx"]],
        ],
      ],
      [
        "components",
        ["ui", "button.tsx", "card.tsx"],
        "header.tsx",
        "footer.tsx",
      ],
      ["lib", ["util.ts"]],
      ["public", "favicon.ico", "vercel.svg"],
      ".eslintrc.json",
      ".gitignore",
      "next.config.js",
      "tailwind.config.js",
      "package.json",
      "README.md",
    ],
  }

  return (
    <SidebarProvider className="h-svh overflow-hidden">
      <ResizablePanelGroup orientation="horizontal" className="min-h-0 flex-1">
        <ResizablePanel
          panelRef={leftPanelRef}
          defaultSize={240}
          minSize={240}
          maxSize={360}
          collapsible
          collapsedSize={0}
        >
          <Sidebar collapsible="none" className="h-full w-full">
            <SidebarHeader>
              <div className="flex items-center justify-between rounded-sm p-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <span className="text-sm">F:\个人资料\笔记</span>
                <span className="flex items-center">
                  <IconPlaceholder
                    lucide="FolderOpenIcon"
                    tabler="IconNotebook"
                    hugeicons="NotebookIcon"
                    phosphor="NotebookIcon"
                    remixicon="RiNotebookLine"
                    className="size-4"
                  />
                </span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <div className="flex items-center justify-between py-0.5 pr-0.5 pl-2">
                  <span className="text-xs">笔记</span>
                  <span className="flex items-center">
                    <IconPlaceholder
                      lucide="SearchIcon"
                      tabler="IconNotebook"
                      hugeicons="NotebookIcon"
                      phosphor="NotebookIcon"
                      remixicon="RiNotebookLine"
                      className="size-8 rounded-sm p-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    />
                    <IconPlaceholder
                      lucide="FolderPlusIcon"
                      tabler="IconNotebook"
                      hugeicons="NotebookIcon"
                      phosphor="NotebookIcon"
                      remixicon="RiNotebookLine"
                      className="size-8 rounded-sm p-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    />
                    <IconPlaceholder
                      lucide="SquarePen"
                      tabler="IconNotebook"
                      hugeicons="NotebookIcon"
                      phosphor="NotebookIcon"
                      remixicon="RiNotebookLine"
                      className="size-8 rounded-sm p-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    />
                  </span>
                </div>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {data.tree.map((item, index) => (
                      <Tree key={index} item={item} />
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <div className="flex gap-2 text-sm text-muted-foreground">
                <IconPlaceholder
                  lucide="DatabaseZap"
                  tabler="IconInfoCircle"
                  hugeicons="Info01Icon"
                  phosphor="InfoCircleIcon"
                  remixicon="RiInfoLine"
                  className="size-4"
                />
                2,302 chunks / 126 files
              </div>
            </SidebarFooter>
          </Sidebar>
        </ResizablePanel>
        <ResizableHandle
          withHandle
          className="!bg-sidebar after:!bg-sidebar focus-visible:!ring-0 data-[separator=active]:!bg-sidebar data-[separator=active]:after:!bg-sidebar [&>div]:hidden"
        />
        <ResizablePanel minSize="20%" className="bg-sidebar py-2 pr-0">
          <div className="relative flex w-full flex-1 flex-col h-full min-h-0 overflow-hidden rounded-none bg-transparent shadow-none">
            <header className="sticky top-0 z-10 -mb-[1px] flex h-12 shrink-0 items-center gap-1 px-2">
              <SidebarTrigger
                className="mr-1 h-10 w-10"
                onClick={handleSidebarTriggerClick}
              />
              <div className="relative z-10 flex h-12 max-w-60 min-w-30 items-center gap-2 rounded-t-lg border-x border-t bg-background px-3 text-sm font-medium">
                <span className="flex-1 truncate">文档示例.md</span>
                <button className="flex size-6 shrink-0 items-center justify-center rounded-sm transition-colors hover:bg-muted">
                  <IconPlaceholder
                    lucide="XIcon"
                    tabler="IconX"
                    hugeicons="Cancel01Icon"
                    phosphor="XIcon"
                    remixicon="RiCloseLine"
                    className="size-4"
                  />
                </button>
              </div>
              <div className="group relative z-10 flex h-10 max-w-60 min-w-30 items-center gap-2 self-center px-3 text-sm hover:rounded-lg hover:bg-muted">
                <span className="flex-1 truncate">新建笔记.md</span>
                <button className="flex size-6 shrink-0 items-center justify-center rounded-sm text-transparent opacity-0 transition-colors group-hover:text-muted-foreground group-hover:opacity-100 hover:text-accent-foreground">
                  <IconPlaceholder
                    lucide="XIcon"
                    tabler="IconX"
                    hugeicons="Cancel01Icon"
                    phosphor="XIcon"
                    remixicon="RiCloseLine"
                    className="size-4"
                  />
                </button>
              </div>
            </header>
            <ScrollArea className="min-h-0 flex-1 overscroll-y-contain rounded-xl border bg-background">
              <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 p-4">
                <h1 className="text-3xl font-bold tracking-tight">开始使用</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  这是一个示例文档页面，展示了如何在侧边栏布局中呈现 Markdown
                  内容。
                </p>

                <div className="mt-8 space-y-6">
                  <section>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      概述
                    </h2>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      侧边栏组件提供了一种灵活的方式来组织应用程序的导航结构。
                      它支持可折叠菜单、嵌套项目和响应式布局，适用于各种复杂的应用场景。
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      特性
                    </h2>
                    <ul className="mt-3 list-inside list-disc space-y-2 text-muted-foreground">
                      <li>完全可访问的键盘导航支持</li>
                      <li>响应式设计，适配各种屏幕尺寸</li>
                      <li>可折叠和展开的菜单组</li>
                      <li>与 Radix UI 组件无缝集成</li>
                      <li>支持深色模式和主题自定义</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      安装
                    </h2>
                    <div className="mt-3 rounded-lg bg-muted p-4">
                      <code className="font-mono text-sm">
                        npm install @radix-ui/react-sidebar
                      </code>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      基本用法
                    </h2>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      以下是一个简单的使用示例：
                    </p>
                    <div className="mt-3 rounded-lg bg-muted p-4">
                      <pre className="overflow-x-auto font-mono text-sm">
                        {`<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              首页
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</SidebarProvider>`}
                      </pre>
                    </div>
                  </section>
                </div>
              </div>
            </ScrollArea>
            {/* 应用窗口操作 */}
            <div className="flex items-center justify-end">
              <div className="flex items-center gap-2 px-2 text-xs text-muted-foreground">
                最后保存：刚刚
                <IconPlaceholder
                  lucide="CloudUploadIcon"
                  tabler="IconSettings"
                  hugeicons="Settings01Icon"
                  phosphor="SettingsIcon"
                  remixicon="RiSettingsLine"
                  className="size-4"
                />
              </div>
              <SettingsDialog
                open={settingsOpen}
                onOpenChange={setSettingsOpen}
              >
                <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:bg-muted">
                  <IconPlaceholder
                    lucide="SettingsIcon"
                    tabler="IconSettings"
                    hugeicons="Settings01Icon"
                    phosphor="SettingsIcon"
                    remixicon="RiSettingsLine"
                    className="size-4"
                  />
                </button>
              </SettingsDialog>
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center hover:bg-muted">
                <IconPlaceholder
                  lucide="MinusIcon"
                  tabler="IconMinus"
                  hugeicons="MinusSignIcon"
                  phosphor="MinusIcon"
                  remixicon="RiSubtractLine"
                  className="size-4"
                />
              </div>
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center hover:bg-muted">
                <IconPlaceholder
                  lucide="SquareIcon"
                  tabler="IconSquare"
                  hugeicons="SquareIcon"
                  phosphor="SquareIcon"
                  remixicon="RiSquareLine"
                  className="size-4"
                />
              </div>
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center hover:bg-destructive hover:text-accent">
                <IconPlaceholder
                  lucide="XIcon"
                  tabler="IconX"
                  hugeicons="Cancel01Icon"
                  phosphor="XIcon"
                  remixicon="RiCloseLine"
                  className="size-4"
                />
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle
          withHandle
          className="!bg-sidebar after:!bg-transparent focus-visible:!ring-0 data-[separator=active]:!bg-sidebar data-[separator=active]:after:!bg-transparent [&>div]:hidden"
        />
        <ResizablePanel defaultSize={360} minSize={360}>
          <Sidebar
            collapsible="none"
            className="h-full w-full flex-col lg:flex"
          >
            {/* 第一行：应用窗口操作 */}
            <div className="flex items-center justify-end">
              <div className="flex items-center gap-2 px-2 text-xs text-muted-foreground">
                最后保存：刚刚
                <IconPlaceholder
                  lucide="CloudUploadIcon"
                  tabler="IconSettings"
                  hugeicons="Settings01Icon"
                  phosphor="SettingsIcon"
                  remixicon="RiSettingsLine"
                  className="size-4"
                />
              </div>
              <SettingsDialog
                open={settingsOpen}
                onOpenChange={setSettingsOpen}
              >
                <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:bg-muted">
                  <IconPlaceholder
                    lucide="SettingsIcon"
                    tabler="IconSettings"
                    hugeicons="Settings01Icon"
                    phosphor="SettingsIcon"
                    remixicon="RiSettingsLine"
                    className="size-4"
                  />
                </button>
              </SettingsDialog>
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center hover:bg-muted">
                <IconPlaceholder
                  lucide="MinusIcon"
                  tabler="IconMinus"
                  hugeicons="MinusSignIcon"
                  phosphor="MinusIcon"
                  remixicon="RiSubtractLine"
                  className="size-4"
                />
              </div>
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center hover:bg-muted">
                <IconPlaceholder
                  lucide="SquareIcon"
                  tabler="IconSquare"
                  hugeicons="SquareIcon"
                  phosphor="SquareIcon"
                  remixicon="RiSquareLine"
                  className="size-4"
                />
              </div>
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center hover:bg-destructive hover:text-accent">
                <IconPlaceholder
                  lucide="XIcon"
                  tabler="IconX"
                  hugeicons="Cancel01Icon"
                  phosphor="XIcon"
                  remixicon="RiCloseLine"
                  className="size-4"
                />
              </div>
            </div>

            {/* 第二行：聊天标题区 */}
            <div className="mt-2 flex items-center justify-between p-4">
              {/* 窗口操作图标 */}
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md hover:bg-muted">
                <IconPlaceholder
                  lucide="MessageSquarePlusIcon"
                  tabler="IconMessage2Plus"
                  hugeicons="MessageAdd01Icon"
                  phosphor="ChatCircleDotsIcon"
                  remixicon="RiChatNewLine"
                  className="size-4"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <IconPlaceholder
                  lucide="ChevronDownIcon"
                  tabler="IconHistory"
                  hugeicons="Clock01Icon"
                  phosphor="ClockCounterClockwiseIcon"
                  remixicon="RiHistoryLine"
                  className="size-4"
                />
                解释 Shor算法是如何威胁到RSA 加密
              </div>
            </div>

            {/* 聊天区 */}
            <div className="flex-1 overflow-auto p-4">
              <div className="flex min-h-full flex-col justify-end gap-4">
                {/* Agent: 欢迎消息 */}
                <div className="text-sm leading-relaxed text-muted-foreground">
                  已连接本地笔记库 (共 142
                  篇文档)。你可以向我提问，或者让我基于现有资料帮你续写当前笔记。
                </div>

                {/* User: 提问 */}
                <div className="ml-auto flex w-max max-w-[85%] flex-col gap-2 rounded-lg rounded-tr-none bg-primary px-3 py-2 text-sm text-primary-foreground">
                  基于本地库，解释 Shor算法是如何威胁到RSA 加密的？
                </div>

                <div className="flex flex-col gap-1">
                  {/* Agent: 知识库搜索提示 */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <IconPlaceholder
                      lucide="SearchIcon"
                      tabler="IconSearch"
                      hugeicons="Search01Icon"
                      phosphor="MagnifyingGlassIcon"
                      remixicon="RiSearchLine"
                      className="size-3"
                    />
                    <span>找到6篇知识库资料</span>
                    <IconPlaceholder
                      lucide="ChevronDownIcon"
                      tabler="IconChevronDown"
                      hugeicons="ArrowDown01Icon"
                      phosphor="CaretDownIcon"
                      remixicon="RiArrowDownSLine"
                      className="size-3"
                    />
                  </div>

                  {/* Agent: 详细回复 */}
                  <div className="text-sm leading-relaxed text-foreground">
                    RSA加密的安全性基于大整数质因数分解的经典计算困难性[1]。
                    传统计算机利用最快的通用数域筛法（GNFS）也需要耗费数百万年的时间才能破解2048位的RSA密钥。然而，Shor算法利用了量子计算的特性。它将因子分解问题转化为了求模指数函数周期的寻找问题[2]。
                    通过量子傅里叶变换，该算法可以在多项式时间内找到周期，从而快速计算出质因数。这意味着一旦拥有足够规模和容错能力的量子计算机问世，现有的RSA加密体系将被瞬间瓦解。
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4">
              <div className="-mb-2 flex items-center justify-between rounded-t-md bg-muted px-3 pt-2 pb-4 text-sm text-muted-foreground">
                @文档示例.md
                <button className="hover:text-foreground">
                  <IconPlaceholder
                    lucide="XIcon"
                    tabler="IconX"
                    hugeicons="Cancel01Icon"
                    phosphor="XIcon"
                    remixicon="RiCloseLine"
                    className="size-4"
                  />
                </button>
              </div>
              <InputGroup className="bg-background">
                <InputGroupTextarea placeholder="Ask, Search or Chat..." />
                <InputGroupAddon align="block-end">
                  <InputGroupButton
                    variant="outline"
                    className="rounded-full style-lyra:rounded-none"
                    size="icon-xs"
                    aria-label="Add"
                  >
                    <IconPlaceholder
                      lucide="PlusIcon"
                      tabler="IconPlus"
                      hugeicons="PlusSignIcon"
                      phosphor="PlusIcon"
                      remixicon="RiAddLine"
                    />
                  </InputGroupButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={<InputGroupButton variant="ghost" />}
                    >
                      Auto
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="top"
                      align="start"
                      className="[--radius:0.95rem]"
                    >
                      <DropdownMenuGroup>
                        <DropdownMenuItem>Auto</DropdownMenuItem>
                        <DropdownMenuItem>Agent</DropdownMenuItem>
                        <DropdownMenuItem>Manual</DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <InputGroupText className="ml-auto">
                    DeepSeek V4
                  </InputGroupText>
                  <Separator orientation="vertical" className="mt-1 h-4!" />
                  <InputGroupButton
                    variant="default"
                    className="rounded-full style-lyra:rounded-none"
                    size="icon-xs"
                  >
                    <IconPlaceholder
                      lucide="ArrowUpIcon"
                      tabler="IconArrowUp"
                      hugeicons="ArrowUp01Icon"
                      phosphor="ArrowUpIcon"
                      remixicon="RiArrowUpLine"
                    />
                    <span className="sr-only">Send</span>
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </Sidebar>
        </ResizablePanel>
      </ResizablePanelGroup>
    </SidebarProvider>
  )
}

type TreeItem = string | TreeItem[]

function Tree({ item }: { item: TreeItem }) {
  const [name, ...items] = Array.isArray(item) ? item : [item]

  if (!items.length) {
    return (
      <SidebarMenuButton
        isActive={name === "button.tsx"}
        className="data-[active=true]:bg-transparent"
      >
        <IconPlaceholder
          lucide="FileIcon"
          tabler="IconFile"
          hugeicons="FileIcon"
          phosphor="FileIcon"
          remixicon="RiFileLine"
        />
        {name}
      </SidebarMenuButton>
    )
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={name === "components" || name === "ui"}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <IconPlaceholder
              lucide="ChevronRightIcon"
              tabler="IconChevronRight"
              hugeicons="ArrowRight01Icon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              className="transition-transform"
            />
            <IconPlaceholder
              lucide="FolderIcon"
              tabler="IconFolder"
              hugeicons="FolderIcon"
              phosphor="FolderIcon"
              remixicon="RiFolderLine"
            />
            {name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((subItem, index) => (
              <Tree key={index} item={subItem} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}
