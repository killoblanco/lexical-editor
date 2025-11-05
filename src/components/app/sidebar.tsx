import { Link, useLocation } from "react-router"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const content = {
  "Get Started": [
    { label: "Home", to: "/" },
    { label: "Introduction", to: "/introduction" },
    { label: "Installation", to: "/installation" },
  ],
}

export const AppSidebar = () => {
  const { pathname } = useLocation()

  return (
    <Sidebar className="border-dashed">
      <SidebarHeader className="flex flex-row items-center gap-2 p-6">
        <a href="//kamilo.dev">
          <img src="/avatar.webp" alt="Logo" className="size-6" />
        </a>
        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">Lexical Editor</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="p-4">
          {Object.keys(content).map((groupTitle) => (
            <SidebarGroup key={groupTitle} className="mb-6">
              <SidebarGroupLabel className="pb-4">{groupTitle}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {content[groupTitle as keyof typeof content].map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton asChild={true} isActive={pathname === item.to}>
                        <Link to={item.to}>{item.label}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
