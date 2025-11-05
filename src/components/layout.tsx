import { Outlet } from "react-router"
import { AppSidebar } from "./sidebar"
import { SidebarProvider } from "./ui/sidebar"

export const PageLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-4 max-w-5xl mx-auto min-h-screen py-16 space-y-8">
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
