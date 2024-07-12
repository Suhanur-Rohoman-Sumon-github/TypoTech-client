import { clearFilters } from "@/redux/fetures/products/products.slice";
import { useAppDispatch } from "@/redux/hook";

const ClearProducts = () => {
  const dispatch = useAppDispatch();

  const clearFiltersHandler = () => {
    dispatch(clearFilters());
  };
  return (
    <div className="flex justify-between">
      <h2 className="text-xl font-bold">Filter</h2>
      <button
        className="text-[#7C3FFF] underline"
        onClick={clearFiltersHandler}
      >
        Reset
      </button>
    </div>
  );
};

export default ClearProducts;
