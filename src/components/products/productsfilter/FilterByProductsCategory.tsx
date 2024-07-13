import {
  removeFilter,
  setCategory,
} from "@/redux/fetures/products/products.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

const FilterByCategory = () => {
  const categories = ["Bluetooth", "Ergonomic", "Mechanical"];
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(
    (state: RootState) => state.products.category
  );

  const handleCategoryChange = (category: string) => {
    const newSelectedCategory = selectedCategory === category ? "" : category;
    dispatch(setCategory(newSelectedCategory));
    dispatch(removeFilter({ type: "brand" }));
  };

  return (
    <div>
      <ul className="space-y-2 border p-4">
        {categories.map((category, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedCategory === category}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByCategory;
