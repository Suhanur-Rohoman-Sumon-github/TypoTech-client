import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import {
  removeFilter,
  setSelectedBrand,
} from "@/redux/fetures/products/products.slice";

const FilterByBrands = () => {
  const keyboardBrandNames = ["KeyTech", "TechFree", "MiniKey", "QuietType"];
  const dispatch = useAppDispatch();
  const { selectedBrand } = useAppSelector(
    (state: RootState) => state.products
  );

  const handleBrandChange = (brand: string) => {
    const newSelectedBrand = selectedBrand === brand ? "" : brand;
    dispatch(setSelectedBrand(newSelectedBrand));
    dispatch(removeFilter({ type: "category" }));
  };

  return (
    <div>
      <ul className="space-y-2 border p-4">
        {keyboardBrandNames.map((brand, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedBrand === brand}
              onChange={() => handleBrandChange(brand)}
            />
            {brand}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByBrands;
