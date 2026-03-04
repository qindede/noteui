"use client"

import * as React from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/radix/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
} from "@/registry/bases/radix/ui/sidebar"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/bases/base/ui/input-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Separator } from "@/registry/bases/base/ui/separator"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"
import { cn } from "@/lib/utils"

export default function SidebarInsetExample() {
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
    <SidebarProvider>
      <Sidebar variant="inset">
        <SidebarHeader>
          <div className="flex justify-between items-center p-2 rounded-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
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
            <div className="flex justify-between items-center pl-2 pr-0.5 py-0.5">
              <span className="text-xs">笔记</span>
              <span className="flex items-center">
                <IconPlaceholder
                  lucide="SearchIcon"
                  tabler="IconNotebook"
                  hugeicons="NotebookIcon"
                  phosphor="NotebookIcon"
                  remixicon="RiNotebookLine"
                  className="size-8 p-2 rounded-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                />
                <IconPlaceholder
                  lucide="FolderPlusIcon"
                  tabler="IconNotebook"
                  hugeicons="NotebookIcon"
                  phosphor="NotebookIcon"
                  remixicon="RiNotebookLine"
                  className="size-8 p-2 rounded-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                />
                <IconPlaceholder
                  lucide="SquarePen"
                  tabler="IconNotebook"
                  hugeicons="NotebookIcon"
                  phosphor="NotebookIcon"
                  remixicon="RiNotebookLine"
                  className="size-8 p-2 rounded-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
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
          <div className="flex text-sm text-muted-foreground gap-2">
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
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
      <Sidebar
        collapsible="none"
        className="sticky top-0 h-svh w-100 lg:flex flex-col"
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
          <div className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-muted cursor-pointer">
            <IconPlaceholder
              lucide="SettingsIcon"
              tabler="IconSettings"
              hugeicons="Settings01Icon"
              phosphor="SettingsIcon"
              remixicon="RiSettingsLine"
              className="size-4"
            />
          </div>
          <div className="h-10 w-10 flex items-center justify-center hover:bg-muted cursor-pointer">
            <IconPlaceholder
              lucide="MinusIcon"
              tabler="IconMinus"
              hugeicons="MinusSignIcon"
              phosphor="MinusIcon"
              remixicon="RiSubtractLine"
              className="size-4"
            />
          </div>
          <div className="h-10 w-10 flex items-center justify-center hover:bg-muted cursor-pointer">
            <IconPlaceholder
              lucide="SquareIcon"
              tabler="IconSquare"
              hugeicons="SquareIcon"
              phosphor="SquareIcon"
              remixicon="RiSquareLine"
              className="size-4"
            />
          </div>
          <div className="h-10 w-10 flex items-center justify-center hover:bg-destructive hover:text-accent cursor-pointer">
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
        <div className="flex mt-2">
          {/* 窗口操作图标 */}
          <div className="text-sm text-foreground flex items-center gap-2 px-2">
            解释 Shor算法是如何威胁到RSA 加密
          </div>
          <div className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-muted cursor-pointer">
            <IconPlaceholder
              lucide="HistoryIcon"
              tabler="IconHistory"
              hugeicons="Clock01Icon"
              phosphor="ClockCounterClockwiseIcon"
              remixicon="RiHistoryLine"
              className="size-4"
            />
          </div>
          <div className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-muted cursor-pointer">
            <IconPlaceholder
              lucide="MessageSquarePlusIcon"
              tabler="IconMessage2Plus"
              hugeicons="MessageAdd01Icon"
              phosphor="ChatCircleDotsIcon"
              remixicon="RiChatNewLine"
              className="size-4"
            />
          </div>
        </div>

        {/* 聊天区 */}
        <div className="flex-1 overflow-auto p-4 pl-2.5">
          <div className="flex flex-col gap-4 justify-end min-h-full">
            {/* Agent: 欢迎消息 */}
            <div className="text-sm text-muted-foreground leading-relaxed">
              已连接本地笔记库 (共 142 篇文档)。你可以向我提问，或者让我基于现有资料帮你续写当前笔记。
            </div>

            {/* User: 提问 */}
            <div className="flex w-max max-w-[85%] flex-col gap-2 rounded-lg rounded-tr-none px-3 py-2 ml-auto bg-primary text-primary-foreground text-sm">
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
              <div className="text-sm text-foreground leading-relaxed">
                RSA加密的安全性基于大整数质因数分解的经典计算困难性[1]。 传统计算机利用最快的通用数域筛法（GNFS）也需要耗费数百万年的时间才能破解2048位的RSA密钥。然而，Shor算法利用了量子计算的特性。它将因子分解问题转化为了求模指数函数周期的寻找问题[2]。 通过量子傅里叶变换，该算法可以在多项式时间内找到周期，从而快速计算出质因数。这意味着一旦拥有足够规模和容错能力的量子计算机问世，现有的RSA加密体系将被瞬间瓦解。
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 pl-2.5">
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
              <InputGroupText className="ml-auto">DeepSeek V4</InputGroupText>
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
