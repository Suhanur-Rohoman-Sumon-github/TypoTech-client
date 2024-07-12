import Header from "../ui/Header";
import { Card } from "../ui/card";
import { FaArrowCircleRight } from "react-icons/fa";
import { useGetAllProductsQuery } from "@/redux/fetures/products/productsApi";
import { Link } from "react-router-dom";
interface Product {
  id: number;
  title: string;
  price: number;
  brand: string;
  image: string;
  ratings: { rating: number }[];
  _id: string;
}

const NewProducts = () => {
  const { data: products } = useGetAllProductsQuery(undefined);
  return (
    <div className="">
      <Header title={"New Products"} subTitle={"New Arrivals"} />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products?.data?.slice(0, 4).map((item: Product) => (
          <Card key={item.id} className="relative overflow-hidden group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full rounded-md transform cursor-pointer transition-transform duration-1000 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
            <Link to={`/products/${item._id}`}>
              <button className=" absolute bottom-2 right-2 z-30  transform -translate-x-1/2 -translate-y-1/2   rounded hidden group-hover:block transition-all duration-700 ease-in-out">
                <FaArrowCircleRight className="text-2xl text-[#7c3FFF]" />
              </button>
            </Link>
            <Link to={`/products/${item._id}`}>
              <div className="absolute h-full w-full bg-black opacity-0 hover:opacity-75 cursor-pointer transition-all duration-300 top-0 left-0 z-10 "></div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
