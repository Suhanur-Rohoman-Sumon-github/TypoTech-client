import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { IoIosStar, IoMdHome } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { keyboardBrands } from "@/data/data";
import { Card, CardContent } from "@/components/ui/card";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { IoStar } from "react-icons/io5";
import { FaArrowCircleRight, FaShoppingCart } from "react-icons/fa";

const SingleProducts = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };
  const starRatings = [
    { stars: 5, count: 10 },
    { stars: 4, count: 8 },
    { stars: 3, count: 5 },
    { stars: 2, count: 2 },
    { stars: 1, count: 1 },
  ];
  const totalReviews = starRatings.reduce((acc, curr) => acc + curr.count, 0);
  return (
    <div className="container   mt-32">
      <div className="flex items-center justify-between  ">
        {/* Left side: Product image */}
        <div className="w-[80%] ">
          <img
            src="https://mechanicalkeyboards.com/cdn/shop/files/FullSize_Collection.jpg?v=1700508291&width=360"
            alt="Product"
            className="w-full h-[400px] object-cover"
          />
          {/* Tabs for additional information */}
          <div className="">
            <div className="flex border-b">
              <button
                className={`px-4 py-2 ${
                  activeTab === "description"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === "size"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("size")}
              >
                Size & Fit
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === "shipping"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("shipping")}
              >
                Shipping & Returns
              </button>
            </div>
            <div className="p-4">
              {activeTab === "description" && (
                <div>
                  <h2 className="text-xl font-bold">Product Description</h2>
                  <p>Here is the product description...</p>
                </div>
              )}
              {activeTab === "size" && (
                <div>
                  <h2 className="text-xl font-bold">Size & Fit</h2>
                  <p>Here is the size and fit information...</p>
                </div>
              )}
              {activeTab === "shipping" && (
                <div>
                  <h2 className="text-xl font-bold">Shipping & Returns</h2>
                  <p>Here is the shipping and returns information...</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right side: Product details */}
        <div className="w-1/2 p-4 h-full ml-9 ">
          <p className=""> Azio</p>
          <h1 className="text-2xl font-bold">Retro Mechanical Keyboard</h1>

          <div className="flex justify-between items-center my-4 border p-4">
            <p className="text-xl font-semibold text-[#7C3FFF]">$159.99</p>
            <p className="flex items-center">
              <FaCheck className="mr-2 text-green-500" />
              In Stock
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-xl font-bold">Quantity</p>
            <div className="flex items-center space-x-2">
              <button
                className="px-2 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                onClick={handleDecrease}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-12 text-center px-2 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                min="1"
              />
              <button
                className="px-2 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
          </div>
          <p className="border p-1 mt-2 text-center">
            4-interest free payments of $18.75 with Klama.{" "}
            <span className=" underline ">Learn more</span>
          </p>
          <div className="flex space-x-4 my-4 ">
            <button className="button-primary w-full text-center mx-auto">
              <MdShoppingCart /> Add to Cart
            </button>
          </div>
          <div className="flex space-x-4 my-4 border">
            {" "}
            <button className="w-full text-center mx-auto p-2 flex items-center justify-center gap-2">
              <GrFavorite /> Favourite
            </button>
          </div>
          <div className="flex justify-between mt-4 w-full  gap-4">
            <div className="p-4 border w-full border-gray-300 rounded  bg-[#F3EDFF]">
              <p className=" font-bold flex items-center gap-2 ">
                <FaLocationDot className="text-red-500" />
                Find in Store
              </p>
              <p>
                Use our "Find in Store" feature to locate nearby stores carrying
                this product.
              </p>
            </div>
            <div className="p-4 border w-full bg-[#F3EDFF] border-gray-300 rounded ">
              <p className="font-bold flex  items-center gap-2 ">
                <IoMdHome className="text-red-500" /> Find Delivery
              </p>
              <p>Choose the best shipping method that suits your needs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mt-32 ">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>
          <p>No reviews yet. Be the first to write a review!</p>
        </div>
      </div>
      <div className="py-8">
        <h1 className="text-2xl text-center font-bold">You might also like</h1>
        <div>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
            {keyboardBrands.slice(0, 4).map((item) => (
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

                  <div className="absolute h-full w-full bg-black opacity-0 hover:opacity-25 cursor-pointer transition-all duration-300 top-0 left-0 z-10 "></div>
                  <div className=" absolute top-[95%] left-[45%]">
                    <button className=" absolute  z-30  transform -translate-x-1/2 -translate-y-1/2   rounded hidden group-hover:block transition-all duration-700 ease-in-out">
                      <FaArrowCircleRight className="text-2xl  text-[#7C3FFF]" />
                    </button>
                  </div>
                  <div className=" absolute top-[95%] right-[45%]">
                    <button className=" absolute top  z-30  transform -translate-x-1/2 -translate-y-1/2   rounded hidden group-hover:block transition-all duration-700 ease-in-out">
                      <FaShoppingCart className="text-2xl  text-[#7C3FFF]" />
                    </button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
