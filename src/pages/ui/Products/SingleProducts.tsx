import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { IoIosStar, IoMdHome } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { keyboardBrands } from "@/data/data";

import CardMap from "@/components/home/CardMap";
import { useParams } from "react-router-dom";

const SingleProducts = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { id } = useParams();

  const singleData = keyboardBrands.find((product) => product.id == id);
  console.log(singleData);

  const { image, title, brand, availableQuantity, price, rating } = singleData;

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

  return (
    <div className="container   md:mt-32">
      <div className="md:flex items-center justify-between  ">
        {/* Left side: Product image */}
        <div className="md:w-[80%] ">
          <img
            src={image}
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
        <div className="md:w-1/2 p-4 h-full md:ml-9 ">
          <p className=""> {brand}</p>
          <h1 className="text-2xl font-bold">{title}</h1>

          <div className="flex justify-between items-center my-4 border p-4">
            <p className="text-xl font-semibold text-[#7C3FFF]">{price}</p>
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
            <span className=" underline  text-[#7C3FFF]">Learn more</span>
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
        <h1 className="text-2xl text-center font-bold mb-8">
          You might also like
        </h1>
        <div className="grid gap-4 col-span-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <CardMap data={keyboardBrands} />
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
