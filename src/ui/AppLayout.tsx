import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="font-nunito p-3">
      <Header />
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default AppLayout;
