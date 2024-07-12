import { Badge } from "@/components/ui/badge";
import { removeFilter } from "@/redux/fetures/products/products.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { IoMdClose } from "react-icons/io";

const DisPlayProductsFilter = () => {
  const dispatch = useAppDispatch();
  const { selectedBrands, sortOrder, priceRange } = useAppSelector(
    (state: RootState) => state.products
  );
  const removeFilterHandler = (filter: string, type: string) => {
    dispatch(removeFilter({ filter, type }));
  };
  return (
    <div className="flex  gap-2 ">
      {selectedBrands.length > 0 && (
        <div className="mb-2 ">
          {selectedBrands.map((brand: string) => (
            <div
              key={brand}
              className="flex items-center space-x-2 relative mt-3"
            >
              <Badge>{brand}</Badge>
              <IoMdClose
                className="h-4 w-4 cursor-pointer absolute -top-2 bg-red-500 text-[#FFF] rounded-full -right-1"
                onClick={() => removeFilterHandler(brand, "brand")}
              />
            </div>
          ))}
        </div>
      )}
      {priceRange[1] !== 1000 && (
        <div className="mb-2 ">
          <div className="flex items-center space-x-2 relative mt-3">
            <Badge>${priceRange[1]}</Badge>
            <IoMdClose
              className="h-4 w-4 cursor-pointer absolute -top-2 bg-red-500 text-[#FFF] rounded-full -right-1"
              onClick={() => removeFilterHandler("", "price")}
            />
          </div>
        </div>
      )}
      {sortOrder && (
        <div className="mb-2 ">
          <div className="flex items-center space-x-2 mt-3 relative">
            <Badge>
              {sortOrder === "lowToHigh" ? "Low to High" : "High to Low"}
            </Badge>
            <IoMdClose
              className="h-4 w-4 cursor-pointer absolute -top-2 bg-red-500 text-[#FFF] rounded-full -right-1"
              onClick={() => removeFilterHandler("", "sortOrder")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DisPlayProductsFilter;
