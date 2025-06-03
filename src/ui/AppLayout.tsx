import { Outlet } from "react-router-dom";
import Header from "./Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

function AppLayout() {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="font-nunito flex h-screen">
        <AppSidebar />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <Header />
        <main className="mt-4 font-nunito">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}

export default AppLayout;
