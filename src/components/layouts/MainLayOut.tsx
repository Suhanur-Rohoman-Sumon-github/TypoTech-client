import Footer from "@/pages/shered/Footer";
import Navbar from "@/pages/shered/Navbar";
import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayOut;
