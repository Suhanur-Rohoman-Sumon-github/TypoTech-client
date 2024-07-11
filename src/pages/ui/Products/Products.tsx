import CardMap from "@/components/home/CardMap";
import ProductPageScheleton from "@/components/skeleton/ProductPageScheleton";
import { Skeleton } from "@/components/ui/skeleton";
import { keyboardBrands } from "@/data/data";
import { useGetAllProductsQuery } from "@/redux/fetures/products/productsApi";
import { useState } from "react";
// Import your Skeleton component

const Products = () => {
  const { data: products, isLoading } = useGetAllProductsQuery(undefined);

  const categories = ["All", "Category A", "Category B", "Category C"];
  const keyboardBrandNames = ["Brand A", "Brand B", "Brand C"];
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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

  const itemsPerPage = 3;
  // Calculate pagination parameters
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = keyboardBrands.slice(indexOfFirstItem, indexOfLastItem);
  // Calculate total number of pages
  const totalPages = Math.ceil(keyboardBrands.length / itemsPerPage);

  // Pagination buttons
  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        className={`border bg-[#7C3FFF] text-white ${
          currentPage === i ? "bg-black text-[#7C3FFF]" : " text-[#7C3FFF]"
        } py-2 px-4 mr-2 rounded focus:outline-none`}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>
    );
  }

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

      {isLoading ? (
        <ProductPageScheleton />
      ) : (
        <div className="md:container mx-auto py-8 pl-2">
          <div className="grid grid-cols-4">
            {/* Sidebar for filtering */}
            <div className="w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Filter</h2>
                <button
                  className="text-[#7C3FFF] underline"
                  onClick={clearFilters}
                >
                  reset
                </button>
              </div>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index} className="cursor-pointer">
                    {category}
                  </li>
                ))}
              </ul>

              <h2 className="text-xs font-bold mt-6 mb-4">Filter by Brand</h2>
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
                  className="text-red-500"
                />
                <div className="flex gap-24">
                  <span>$0</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              <h2 className="text-xs font-bold mt-6 mb-4">Sort by Price</h2>
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
            </div>

            {/* Product list */}
            <div className="grid gap-4 col-span-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-4">
              <CardMap data={products?.data} />
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center mt-10 space-x-2 pb-8">
        {paginationButtons}
      </div>
    </div>
  );
};

export default Products;
