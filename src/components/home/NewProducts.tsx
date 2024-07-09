import { keyboardBrands } from "@/data/data";
import Header from "../ui/Header";
import { Card } from "../ui/card";
import { FaArrowCircleRight } from "react-icons/fa";
const NewProducts = () => {
  return (
    <div className="">
      <Header title={"New Products"} subTitle={"New Arrivals"} />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {keyboardBrands.slice(0, 4).map((item) => (
          <Card key={item.id} className="relative overflow-hidden group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full rounded-md transform cursor-pointer transition-transform duration-1000 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
            <button className=" absolute bottom-2 right-2 z-30  transform -translate-x-1/2 -translate-y-1/2   rounded hidden group-hover:block transition-all duration-700 ease-in-out">
              <FaArrowCircleRight className="text-2xl text-[#7c3FFF]" />
            </button>
            <div className="absolute h-full w-full bg-black opacity-0 hover:opacity-75 cursor-pointer transition-all duration-300 top-0 left-0 z-10 "></div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
