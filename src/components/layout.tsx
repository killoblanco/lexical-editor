import { Outlet } from "react-router"
import { AppSidebar } from "./sidebar"
import { SidebarProvider } from "./ui/sidebar"

export const PageLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
