import CardMap from "@/components/home/CardMap";
import { keyboardBrands } from "@/data/data";
import { useState } from "react";

const Products = () => {
  const categories = ["All", "Category A", "Category B", "Category C"];
  const keyboardBrandNames = ["Brand A", "Brand B", "Brand C"];
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOrder, setSortOrder] = useState("");

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setPriceRange([0, 1000]);
    setSortOrder("");
  };

  return (
    <div>
      {/* Section with background image and text */}
      <div
        style={{
          backgroundImage:
            "url(https://mechanicalkeyboards.com/cdn/shop/files/BOOG75_Slide.jpg?v=1713208855&width=1800)",
        }}
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
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
          <div className="w-1/4 pr-4">
            <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index} className="cursor-pointer hover:text-blue-500">
                  {category}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold mt-6 mb-4">Filter by Brand</h2>
            <ul className="space-y-2">
              {keyboardBrandNames.map((brand, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  {brand}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold mt-6 mb-4">Filter by Price</h2>
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, e.target.value])}
                className="w-full"
              />
              <div className="flex justify-between">
                <span>$0</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <h2 className="text-xl font-bold mt-6 mb-4">Sort by Price</h2>
            <div className="space-y-2">
              <div>
                <input
                  type="radio"
                  id="lowToHigh"
                  name="sortOrder"
                  value="lowToHigh"
                  checked={sortOrder === "lowToHigh"}
                  onChange={() => setSortOrder("lowToHigh")}
                />
                <label htmlFor="lowToHigh" className="ml-2">
                  Low to High
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="highToLow"
                  name="sortOrder"
                  value="highToLow"
                  checked={sortOrder === "highToLow"}
                  onChange={() => setSortOrder("highToLow")}
                />
                <label htmlFor="highToLow" className="ml-2">
                  High to Low
                </label>
              </div>
            </div>

            <button
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>

          {/* Product list */}
          <div className="grid gap-4 col-span-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <CardMap data={keyboardBrands} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
