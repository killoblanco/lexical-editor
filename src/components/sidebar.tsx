import { Link } from "react-router"
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
} from "./ui/sidebar"

export const AppSidebar = () => {
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
          <SidebarGroupLabel className="pb-4">Get Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild={true}>
                  <Link to="/">Home</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
