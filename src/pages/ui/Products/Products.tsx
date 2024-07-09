import { Card, CardContent } from "@/components/ui/card";
import { keyboardBrands } from "@/data/data";
import { CiStar } from "react-icons/ci";
import { FaArrowCircleRight, FaShoppingCart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import Rating from "react-rating";

const Products = () => {
  const categories = ["All", "Category A", "Category B", "Category C"];
  return (
    <div>
      {/* Section with background image and text */}
      <div
        style={{
          backgroundImage:
            "url(https://mechanicalkeyboards.com/cdn/shop/files/BOOG75_Slide.jpg?v=1713208855&width=1800)",
        }}
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white "
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#000000]">
            Welcome to Our Products
          </h1>
          <p className="mt-4 text-lg text-[#000000]">
            Discover a wide range of products that suit your needs.
          </p>
        </div>
      </div>

      {/* Products section with filtering sidebar and product list */}
      <div className="container mx-auto py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar for filtering */}
          <div className="">
            <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index} className="cursor-pointer hover:text-blue-500">
                  {category}
                </li>
              ))}
            </ul>
          </div>
          {/* Product list */}
          <div className="grid gap-4 col-span-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {keyboardBrands.slice(0, 8).map((item) => (
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

export default Products;
