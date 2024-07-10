import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url(https://mechanicalkeyboards.com/cdn/shop/files/Keyboard_Banner.jpg?v=1707783381&width=1600)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left text-[#000] max-w-md md:max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mr-2">
            Discover Your Perfect Keyboard <br />
          </h1>
          <p className="text-xl mb-4">
            Welcome to our keyboard store! Explore our collection of mechanical
            keyboards, gaming setups, and office essentials. Find your perfect
            keyboard today.
          </p>
          <Link to={"/products"}>
            <button className="button-primary">
              Shop Now <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
