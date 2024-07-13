import DashBoardLayout from "@/components/layouts/DashBoardLayout";
import MainLayOut from "@/components/layouts/MainLayOut";
import AddProducts from "@/pages/dashbord/admin/AddProducts";
import AdminHome from "@/pages/dashbord/admin/AdminHome";
import AnaLytics from "@/pages/dashbord/admin/AnaLytics";
import EditProducts from "@/pages/dashbord/admin/EditProducts";
import ManageUser from "@/pages/dashbord/admin/ManageUser";
import Order from "@/pages/dashbord/admin/Order";
import Product from "@/pages/dashbord/admin/Product";
import AboutUs from "@/pages/ui/AboutUs/AboutUs";
import ContactUs from "@/pages/ui/contact/Contact";
import Home from "@/pages/ui/home/Home";
import Products from "@/pages/ui/Products/Products";
import SingleProducts from "@/pages/ui/Products/SingleProducts";
import Checkout from "@/pages/user/Checkout";
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
        element: <ContactUs />,
      },
      {
        path: "/products/:id",
        element: <SingleProducts />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "home",
        element: <AdminHome />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "edit-products",
        element: <EditProducts />,
      },
      {
        path: "analytics",
        element: <AnaLytics />,
      },
      {
        path: "user",
        element: <ManageUser />,
      },
      {
        path: "orders",
        element: <Order />,
      },
      {
        path: "add-products",
        element: <AddProducts />,
      },
    ],
  },
]);

export default route;
