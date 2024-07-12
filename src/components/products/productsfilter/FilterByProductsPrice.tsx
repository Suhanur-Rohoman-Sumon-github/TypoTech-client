import { setPriceRange } from "@/redux/fetures/products/products.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

const FilterByProductsPrice = () => {
  const dispatch = useAppDispatch();
  const { priceRange } = useAppSelector((state: RootState) => state.products);
  return (
    <div className="mb-4 border p-4">
      <input
        type="range"
        min="0"
        max="1000"
        value={priceRange[1]}
        onChange={(e) => dispatch(setPriceRange([0, Number(e.target.value)]))}
        className="text-red-500"
      />
      <div className="flex gap-24">
        <span>$0</span>
        <span>${priceRange[1]}</span>
      </div>
    </div>
  );
};

export default FilterByProductsPrice;
