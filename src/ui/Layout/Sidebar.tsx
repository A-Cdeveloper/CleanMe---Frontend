import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside
      className="w-full lg:w-1/2 xl:w-[450px] h-auto lg:h-screen border-e border-secondary-500/50 p-3 
    overflow-auto pb-[50px] lg:pb-[100px] order-2 lg:order-1 scrollbar-thin scrollbar-thumb-secondary-900/70 scrollbar-track-primary-500"
    >
      <Outlet />
    </aside>
  );
};

export default Sidebar;
