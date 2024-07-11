import Rating from "react-rating";
import { Card, CardContent } from "../ui/card";
import { CiStar } from "react-icons/ci";
import { IoStar } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { FaArrowCircleRight, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardMap = ({ data }) => {
  console.log(data);
  return (
    <>
      {data?.slice(0, 8)?.map((item) => (
        <div className="group" key={item.id}>
          <Card className="relative overflow-hidden  rounded-md transform cursor-pointer transition-transform duration-1000 ease-in-out group-hover:scale-90">
            <CardContent>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 p-4 "
                loading="lazy"
              />
              <div className="px-2 py-4">
                <h1 className="text-xl font-bold">
                  {item.title && item.title.length > 15
                    ? item.title.slice(0, 15) + "(...)"
                    : item.title}
                </h1>
                <p className="text-[#7C3FFF] font-bold text-xs mt-2">
                  {`Price: ${item.price}`}
                </p>
                <p className="text-[#7C3FFF] font-bold text-xs mt-2">
                  {`Brand : ${item.brand}`}
                </p>
                <p className="text-[#ffd700] font-bold text-xl mt-2 ">
                  <Rating
                    placeholderRating={item.rating}
                    emptySymbol={<CiStar />}
                    placeholderSymbol={<IoStar />}
                    fullSymbol={<IoIosStar />}
                  />
                </p>
              </div>
            </CardContent>

            <Link to={`/products/${item._id}`}>
              <div className="absolute h-full w-full bg-black opacity-0 hover:opacity-25 cursor-pointer transition-all duration-300 top-0 left-0 z-10 "></div>
            </Link>
            <div className=" absolute top-[95%] left-[45%]">
              <Link to={`/products/${item._id}`}>
                <button className=" absolute  z-30  transform -translate-x-1/2 -translate-y-1/2   rounded hidden group-hover:block transition-all duration-700 ease-in-out">
                  <FaArrowCircleRight className="text-2xl  text-[#7C3FFF]" />
                </button>
              </Link>
            </div>
            <div className=" absolute top-[95%] right-[45%]">
              <button className=" absolute top  z-30  transform -translate-x-1/2 -translate-y-1/2   rounded hidden group-hover:block transition-all duration-700 ease-in-out">
                <FaShoppingCart className="text-2xl  text-[#7C3FFF]" />
              </button>
            </div>
          </Card>
        </div>
      ))}
    </>
  );
};

export default CardMap;
