import Footer from "@/pages/shered/Footer";
import Navbar from "@/pages/shered/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../cutom/useScrolltoTop";

const MainLayOut = () => {
  return (
    <div className="">
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayOut;
