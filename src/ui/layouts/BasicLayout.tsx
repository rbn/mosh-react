import { Outlet } from "react-router-dom";
import TopNav from "../nav/TopNav";

export default function BasicLayout() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex">
      <TopNav />
      <Outlet />
    </div>
  );
}
