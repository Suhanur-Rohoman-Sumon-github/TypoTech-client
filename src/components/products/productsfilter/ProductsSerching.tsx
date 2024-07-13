// src/components/ProductsSearching.tsx

import { RootState } from "@/redux/store";
// Ensure setSortOrder is imported
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  setSearchQuery,
  setSortOrder,
} from "@/redux/fetures/products/products.slice";

const ProductsSearching = () => {
  const dispatch = useAppDispatch();
  const { searchQuery, sortOrder } = useAppSelector(
    (state: RootState) => state.products
  );

  return (
    <div className="flex gap-8 justify-between items-center  sticky top-0 bg-white z-10">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="border px-4 py-2 rounded"
      />
      <select
        value={sortOrder}
        onChange={(e) => dispatch(setSortOrder(e.target.value))}
        className="border px-4 py-2 rounded"
      >
        <option value="">Sort by Price</option>
        <option value="price">Low to High</option>
      </select>
    </div>
  );
};

export default ProductsSearching;
