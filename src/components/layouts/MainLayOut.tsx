import Footer from "@/pages/shered/Footer";
import Navbar from "@/pages/shered/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../cutom/useScrolltoTop";
import { Toaster } from "sonner";

const MainLayOut = () => {
  return (
    <div className="">
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
};

export default MainLayOut;
