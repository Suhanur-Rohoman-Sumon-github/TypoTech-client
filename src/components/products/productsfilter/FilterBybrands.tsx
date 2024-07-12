import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { setSelectedBrands } from "@/redux/fetures/products/products.slice";

const FilterBybrands = () => {
  const keyboardBrandNames = [
    "KeyTech",
    "TechFree",
    "MiniKey",
    "QuietType",
    "KeyTech", // Note: "KeyTech" appears twice, you may want unique values
  ];
  const dispatch = useAppDispatch();
  const { selectedBrands } = useAppSelector(
    (state: RootState) => state.products
  );

  const handleBrandChange = (brand: string) => {
    const newSelectedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];

    dispatch(setSelectedBrands(newSelectedBrands));
  };

  return (
    <div>
      <ul className="space-y-2 border p-4">
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
    </div>
  );
};

export default FilterBybrands;
