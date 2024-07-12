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
    <div>
      {selectedBrands.length > 0 && (
        <div className="mb-2">
          <h3 className="font-bold">Selected Brands:</h3>
          {selectedBrands.map((brand: string) => (
            <div key={brand} className="flex items-center space-x-2">
              <span>{brand}</span>
              <IoMdClose
                className="h-4 w-4 cursor-pointer"
                onClick={() => removeFilterHandler(brand, "brand")}
              />
            </div>
          ))}
        </div>
      )}
      {priceRange[1] !== 1000 && (
        <div className="mb-2">
          <h3 className="font-bold">Price Range:</h3>
          <div className="flex items-center space-x-2">
            <span>
              ${priceRange[0]} - ${priceRange[1]}
            </span>
            <IoMdClose
              className="h-4 w-4 cursor-pointer"
              onClick={() => removeFilterHandler("", "price")}
            />
          </div>
        </div>
      )}
      {sortOrder && (
        <div className="mb-2">
          <h3 className="font-bold">Sort Order:</h3>
          <div className="flex items-center space-x-2">
            <span>
              {sortOrder === "lowToHigh" ? "Low to High" : "High to Low"}
            </span>
            <IoMdClose
              className="h-4 w-4 cursor-pointer"
              onClick={() => removeFilterHandler("", "sortOrder")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DisPlayProductsFilter;
