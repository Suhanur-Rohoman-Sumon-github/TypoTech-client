import MainLayOut from "@/components/layouts/MainLayOut";
import AboutUs from "@/pages/ui/AboutUs/AboutUs";
import Contact from "@/pages/ui/contact/Contact";
import Home from "@/pages/ui/home/Home";
import Products from "@/pages/ui/Products/Products";
import { createBrowserRouter } from "react-router-dom";
const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default route;
