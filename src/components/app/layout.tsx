import { Outlet } from "react-router"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./sidebar"

export const PageLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-4 max-w-3xl mx-auto min-h-screen py-16 space-y-12">
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
