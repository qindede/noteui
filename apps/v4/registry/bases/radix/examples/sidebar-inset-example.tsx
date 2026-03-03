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
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

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
                  className="size-7 p-1.5 rounded-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                />
                <IconPlaceholder
                  lucide="FolderPlusIcon"
                  tabler="IconNotebook"
                  hugeicons="NotebookIcon"
                  phosphor="NotebookIcon"
                  remixicon="RiNotebookLine"
                  className="size-7 p-1.5 rounded-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                />
                <IconPlaceholder
                  lucide="SquarePen"
                  tabler="IconNotebook"
                  hugeicons="NotebookIcon"
                  phosphor="NotebookIcon"
                  remixicon="RiNotebookLine"
                  className="size-7 p-1.5 rounded-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
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
        className="sticky top-0 hidden h-svh w-120 lg:flex flex-col"
      >
        {/* 第一行：应用窗口操作 */}
        <div className="flex items-center justify-end gap-2 px-4">
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

        {/* 第二行：聊天区域 */}
        <div className="flex flex-1 min-h-0">
          {/* 窗口操作图标 */}
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
              lucide="PlusIcon"
              tabler="IconPlus"
              hugeicons="PlusSignIcon"
              phosphor="PlusIcon"
              remixicon="RiAddLine"
              className="size-4"
            />
          </div>
        </div>

        {/* 聊天区 */}
        <div className="flex-1 overflow-auto p-4">
          {/* 聊天内容将在这里显示 */}
        </div>

        {/* Chat Input */}
        <div className="border-t p-4">
          <div className="flex items-center gap-2 rounded-lg border bg-background px-3 py-2">
            <input
              type="text"
              placeholder="输入消息..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <IconPlaceholder
              lucide="SendIcon"
              tabler="IconSend"
              hugeicons="SentIcon"
              phosphor="PaperPlaneRightIcon"
              remixicon="RiSendPlaneLine"
              className="size-4 cursor-pointer text-muted-foreground hover:text-foreground"
            />
          </div>
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
