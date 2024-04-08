
import Sidebar from "@/pages/(dashboard)/_components/Sidebar";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div className="grid grid-cols-[300px,auto]">
      <aside><Sidebar/></aside>
      <main>
        <Outlet />
        LayoutAdmin một
      </main>
    </div>
  );
};

export default LayoutAdmin;
