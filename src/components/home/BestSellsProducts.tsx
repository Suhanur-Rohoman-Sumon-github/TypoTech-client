import { keyboardBrands } from "@/data/data";
import Header from "../ui/Header";

import CardMap from "./CardMap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const BestSellsProducts = () => {
  return (
    <div className="">
      <Header
        title={"TOP SELLING PRODUCTS"}
        subTitle={"Best Weekend Sellers"}
      />
      <div className="grid gap-4 col-span-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <CardMap data={keyboardBrands} />
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
