import { Badge } from "@/components/ui/badge";
import { removeFilter } from "@/redux/fetures/products/products.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { IoMdClose } from "react-icons/io";

const DisPlayProductsFilter = () => {
  const dispatch = useAppDispatch();
  const { selectedBrand, sortOrder, priceRange, category, searchQuery } =
    useAppSelector((state: RootState) => state.products);

  const removeFilterHandler = (type: string) => {
    if (type === "brand") {
      dispatch(removeFilter({ type }));
    } else if (type === "price") {
      dispatch(removeFilter({ type }));
    } else if (type === "sortOrder") {
      dispatch(removeFilter({ type }));
    } else if (type === "category") {
      dispatch(removeFilter({ type }));
    } else if (type === "searchQuery") {
      dispatch(removeFilter({ type }));
    }
  };

  return (
    <div className="flex gap-2">
      {selectedBrand && (
        <div className="mb-2">
          <div className="flex items-center space-x-2 relative mt-3">
            <Badge>{selectedBrand}</Badge>
            <IoMdClose
              className="h-4 w-4 cursor-pointer absolute -top-2 bg-red-500 text-[#FFF] rounded-full -right-1"
              onClick={() => removeFilterHandler("brand")}
            />
          </div>
        </div>
      )}
      {priceRange[1] !== 1000 && (
        <div className="mb-2">
          <div className="flex items-center space-x-2 relative mt-3">
            <Badge>
              ${priceRange[0]} - ${priceRange[1]}
            </Badge>
            <IoMdClose
              className="h-4 w-4 cursor-pointer absolute -top-2 bg-red-500 text-[#FFF] rounded-full -right-1"
              onClick={() => removeFilterHandler("price")}
            />
          </div>
        </div>
      )}
      {sortOrder && (
        <div className="mb-2">
          <div className="flex items-center space-x-2 mt-3 relative">
            <Badge>
              {sortOrder === "price" ? "Low to High" : "High to Low"}
            </Badge>
            <IoMdClose
              className="h-4 w-4 cursor-pointer absolute -top-2 bg-red-500 text-[#FFF] rounded-full -right-1"
              onClick={() => removeFilterHandler("sortOrder")}
            />
          </div>
        </div>
      )}
      {category && (
        <div className="mb-2">
          <div className="flex items-center space-x-2 mt-3 relative">
            <Badge>{category}</Badge>
            <IoMdClose
              className="h-4 w-4 cursor-pointer absolute -top-2 bg-red-500 text-[#FFF] rounded-full -right-1"
              onClick={() => removeFilterHandler("category")}
            />
          </div>
        </div>
      )}
      {searchQuery && (
        <div className="mb-2">
          <div className="flex items-center space-x-2 mt-3 relative">
            <Badge>{searchQuery}</Badge>
            <IoMdClose
              className="h-4 w-4 cursor-pointer absolute -top-2 bg-red-500 text-[#FFF] rounded-full -right-1"
              onClick={() => removeFilterHandler("searchQuery")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DisPlayProductsFilter;
