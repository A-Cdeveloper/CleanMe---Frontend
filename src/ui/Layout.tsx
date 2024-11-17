import { useParams } from "react-router-dom";
import Map from "../features/map/Map";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  const params = useParams();
  const id = params.id ? params.id : "";
  const userId = params.id ? params.id : "";

  return (
    <div className="container bg-primary max-w-full h-auto lg:h-screen flex flex-wrap items-start overflow-hidden">
      <Header />
      <Sidebar />
      <main className="flex-1 h-[350px] lg:h-screen p-3 lg:p-3 mt-[60px] lg:mt-0 order-1 lg:order-2">
        <Map problemId={id} userId={userId} />
      </main>
    </div>
  );
};

export default Layout;
