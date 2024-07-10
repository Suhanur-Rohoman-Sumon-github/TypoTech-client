import CardMap from "@/components/home/CardMap";
import { keyboardBrands } from "@/data/data";

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
        <div className="flex">
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
          <CardMap data={keyboardBrands} />
        </div>
      </div>
    </div>
  );
};

export default Products;
