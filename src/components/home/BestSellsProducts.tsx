import Header from "../ui/Header";

import CardMap from "./CardMap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "@/redux/fetures/products/productsApi";
const BestSellsProducts = () => {
  const { data: products } = useGetAllProductsQuery(undefined);
  return (
    <div className="">
      <Header
        title={"TOP SELLING PRODUCTS"}
        subTitle={"Best Weekend Sellers"}
      />
      <div className="grid gap-4 col-span-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <CardMap data={products?.data} />
      </div>
      <Link to={"/products"}>
        <button className="button-primary mt-4">
          View More <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default BestSellsProducts;
