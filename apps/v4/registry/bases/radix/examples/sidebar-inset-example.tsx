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
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
} from "@/registry/bases/radix/ui/sidebar"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export default function SidebarInsetExample() {
  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Acme Inc",
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        plan: "Free",
      },
    ],
    navMain: [
      {
        title: "Playground",
        url: "#",
        icon: (
          <IconPlaceholder
            lucide="TerminalSquareIcon"
            tabler="IconTerminal2"
            hugeicons="ComputerTerminalIcon"
            phosphor="TerminalIcon"
            remixicon="RiTerminalBoxLine"
          />
        ),
        isActive: true,
        items: [
          {
            title: "History",
            url: "#",
          },
          {
            title: "Starred",
            url: "#",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
      {
        title: "Models",
        url: "#",
        icon: (
          <IconPlaceholder
            lucide="BotIcon"
            tabler="IconRobot"
            hugeicons="RoboticIcon"
            phosphor="RobotIcon"
            remixicon="RiRobotLine"
          />
        ),
        items: [
          {
            title: "Genesis",
            url: "#",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: (
          <IconPlaceholder
            lucide="BookOpen"
            tabler="IconBook"
            hugeicons="BookOpen02Icon"
            phosphor="BookOpenIcon"
            remixicon="RiBookOpenLine"
          />
        ),
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: (
          <IconPlaceholder
            lucide="Settings2Icon"
            tabler="IconSettings"
            hugeicons="Settings05Icon"
            phosphor="GearIcon"
            remixicon="RiSettingsLine"
          />
        ),
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: (
          <IconPlaceholder
            lucide="FrameIcon"
            tabler="IconFrame"
            hugeicons="CropIcon"
            phosphor="CropIcon"
            remixicon="RiCropLine"
          />
        ),
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: (
          <IconPlaceholder
            lucide="PieChartIcon"
            tabler="IconChartPie"
            hugeicons="PieChartIcon"
            phosphor="ChartPieIcon"
            remixicon="RiPieChartLine"
          />
        ),
      },
      {
        name: "Travel",
        url: "#",
        icon: (
          <IconPlaceholder
            lucide="MapIcon"
            tabler="IconMap"
            hugeicons="MapsIcon"
            phosphor="MapTrifoldIcon"
            remixicon="RiMapLine"
          />
        ),
      },
    ],
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

  const [activeTeam, setActiveTeam] = React.useState(data.teams[0])

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
            <SidebarMenu>
              {data.navMain.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip={item.title} asChild>
                      <CollapsibleTrigger>
                        {item.icon}
                        <span>{item.title}</span>
                        <IconPlaceholder
                          lucide="ChevronRightIcon"
                          tabler="IconChevronRight"
                          hugeicons="ArrowRight01Icon"
                          phosphor="CaretRightIcon"
                          remixicon="RiArrowRightSLine"
                          className="ml-auto transition-transform duration-100 group-data-open/collapsible:rotate-90"
                        />
                      </CollapsibleTrigger>
                    </SidebarMenuButton>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>{subItem.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarMenu>
              {data.projects.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon}
                      {item.name}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
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
