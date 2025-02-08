import { Outlet } from "react-router-dom";
import { Topbar } from "../topbar";

export function ProductsLayout() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-red-100">
      <Topbar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
