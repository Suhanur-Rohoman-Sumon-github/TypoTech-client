// src/redux/features/products/productsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  selectedBrands: string[];
  priceRange: [number, number];
  sortOrder: string;
  currentPage: number;
  searchQuery: string;
}

const initialState: ProductsState = {
  selectedBrands: [],
  priceRange: [0, 1000],
  sortOrder: '',
  currentPage: 1,
  searchQuery: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedBrands(state, action: PayloadAction<string[]>) {
      state.selectedBrands = action.payload;
    },
    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.priceRange = action.payload;
    },
    setSortOrder(state, action: PayloadAction<string>) {
      state.sortOrder = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    clearFilters(state) {
      state.selectedBrands = [];
      state.priceRange = [0, 1000];
      state.sortOrder = '';
    },
    removeFilter(state, action: PayloadAction<{ filter: string; type: string }>) {
      const { filter, type } = action.payload;
      if (type === 'brand') {
        state.selectedBrands = state.selectedBrands.filter((b) => b !== filter);
      } else if (type === 'price') {
        state.priceRange = [0, 1000];
      } else if (type === 'sortOrder') {
        state.sortOrder = '';
      }
    },
  },
});

export const {
  setSelectedBrands,
  setPriceRange,
  setSortOrder,
  setCurrentPage,
  setSearchQuery,
  clearFilters,
  removeFilter,
} = productsSlice.actions;

export default productsSlice.reducer;
