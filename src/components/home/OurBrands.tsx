import { companiesLogos, keyboardBrands } from "@/data/data";
import Header from "../ui/Header";
import { Card } from "../ui/card";
import { FaArrowCircleRight } from "react-icons/fa";

const OurBrands = () => {
  return (
    <div className="">
      <Header title={"our brands"} subTitle={"popular  brands"} />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {companiesLogos.slice(0, 8).map((item) => (
          <Card key={item.id} className="relative overflow-hidden group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full transform cursor-pointer transition-transform duration-1000 ease-in-out group-hover:scale-110"
              loading="lazy"
            />

            <div className="absolute h-full w-full bg-black opacity-0 hover:opacity-75 cursor-pointer transition-all duration-300 top-0 left-0 z-10 ">
              <p className="text-4xl text-center text-[#7c3FFF] absolute bottom-[50%] right-[50%]">
                {item.title}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurBrands;
