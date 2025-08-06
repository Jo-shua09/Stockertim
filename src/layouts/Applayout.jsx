import { Outlet } from "react-router-dom";
import Navigation from "./../components/common/Navigation";
import Footer from "./../components/common/Footer";
import Sidebar from "./../components/common/Sidebar";

export default function Applayout() {
  return (
    <div className="w-full max-w-[185rem] m-auto text-gray-800">
      <div className="fixed w-full z-10">
        <Navigation />
      </div>
      <div className="w-full flex items-start pt-60 md:pt-28">
        <div className="w-full flex-[1] lg:block hidden">
          <Sidebar />
        </div>
        <div className="w-full flex-[6] bg-gray-50 overflow-hidden">
          <div className="w-full">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
