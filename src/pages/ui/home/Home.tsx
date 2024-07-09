import Banner from "@/components/home/Banner";
import BestSellsProducts from "@/components/home/BestSellsProducts";
import Brands from "@/components/home/Brands";
import NewProducts from "@/components/home/NewProducts";
import OurBrands from "@/components/home/OurBrands";
import ProductsCarosal from "@/components/home/ProductsCarosal";
import ShortNavbar from "@/components/home/ShortNavbar";
import TestiMonial from "@/components/home/TestiMonial";

const Home = () => {
  return (
    <div className="">
      <ShortNavbar />
      <Banner />
      <div className="h-full mx-auto w-10/12">
        <div className="my-16">
          <Brands />
        </div>
        <div className="my-32">
          <NewProducts />
        </div>
        <div className="my-32">
          <ProductsCarosal />
        </div>
        <div className="my-32">
          <BestSellsProducts />
        </div>
        <div className="my-32">
          <OurBrands />
        </div>
        <div className="my-32">
          <TestiMonial />
        </div>
      </div>
    </div>
  );
};

export default Home;
