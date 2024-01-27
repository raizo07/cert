import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="bg-white">
      <Navbar mode={"light"} />
      <main className="border-t-[1px] border-t-solid border-t-[#F7F7F7] py-10 px-[64px]">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
