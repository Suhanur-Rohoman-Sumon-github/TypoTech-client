import { keyboardBrands } from "@/data/data";
import Header from "../ui/Header";

import CardMap from "./CardMap";
import { FaArrowRight } from "react-icons/fa";
const BestSellsProducts = () => {
  return (
    <div className="">
      <Header
        title={"TOP SELLING PRODUCTS"}
        subTitle={"Best Weekend Sellers"}
      />
      <CardMap data={keyboardBrands} />
      <button className="button-primary mt-4">
        View More <FaArrowRight />
      </button>
    </div>
  );
};

export default BestSellsProducts;
