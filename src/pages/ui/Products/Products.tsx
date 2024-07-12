import CardMap from "@/components/home/CardMap";
import ProductPageScheleton from "@/components/skeleton/ProductPageScheleton";

import { useGetAllProductsQuery } from "@/redux/fetures/products/productsApi";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
// Assuming you are using Heroicons for icons
import { setCurrentPage } from "@/redux/fetures/products/products.slice";
import ProductsSearching from "@/components/products/productsfilter/ProductsSerching";
import DisPlayProductsFilter from "@/components/products/productsfilter/DisPlayProductsFilter";
import FilterBybrands from "@/components/products/productsfilter/FilterBybrands";
import FilterByProductsPrice from "@/components/products/productsfilter/FilterByProductsPrice";
import ClearProducts from "@/components/products/productsfilter/ClearProducts";

const Products = () => {
  const dispatch = useDispatch();
  const { sortOrder, currentPage, searchQuery } = useSelector(
    (state: RootState) => state.products
  );

  const categories = ["All", "Category A", "Category B", "Category C"];

  const { data: products, isLoading } = useGetAllProductsQuery({
    search: searchQuery,
    sort: sortOrder,
    page: currentPage,
    limit: 10,
  });

  if (isLoading) {
    return <ProductPageScheleton />;
  }

  // Calculate total number of pages
  const totalPages = products?.totalPages || 1;

  // Pagination buttons
  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        className={`border bg-[#7C3FFF] text-white ${
          currentPage === i ? "bg-black text-[#7C3FFF]" : " text-[#7C3FFF]"
        } py-2 px-4 mr-2 rounded focus:outline-none`}
        onClick={() => dispatch(setCurrentPage(i))}
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

      <div className="md:container mx-auto py-8 pl-2">
        <div className="grid grid-cols-4">
          {/* Sidebar for filtering */}
          <div className="w-full">
            <div className="p-4 mb-4 border">
              <ClearProducts />
              {/* Display selected filters */}
              <div className="mt-4">
                <DisPlayProductsFilter />
              </div>
            </div>
            {/* category */}
            <ul className="space-y-2 border p-4">
              {categories.map((category, index) => (
                <li key={index} className="cursor-pointer">
                  {category}
                </li>
              ))}
            </ul>

            <h2 className="text-xs font-bold mt-6 mb-4">Filter by Brand</h2>
            <FilterBybrands />

            <h2 className="text-xl font-bold mt-6 mb-4">Filter by Price</h2>
            <FilterByProductsPrice />
          </div>

          {/* Product list */}
          <div className="col-span-3">
            <div className="flex justify-between items-center p-4 sticky top-0 bg-white z-10">
              <ProductsSearching />
            </div>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-4">
              <CardMap data={products?.data} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 space-x-2 pb-8">
        {paginationButtons}
      </div>
    </div>
  );
};

export default Products;
