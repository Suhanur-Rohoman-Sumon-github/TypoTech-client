import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  selectedBrand: string 
  priceRange: [number, number];
  sortOrder: string;
  currentPage: number;
  searchQuery: string;
  category: string 
}

const initialState: ProductsState = {
  selectedBrand: '',
  priceRange: [0, 1000],
  sortOrder: '',
  currentPage: 1,
  searchQuery: '',
  category: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedBrand(state, action: PayloadAction<string>) {
      state.selectedBrand = action.payload;
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
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    clearFilters(state) {
      state.selectedBrand = '';
      state.priceRange = [0, 1000];
      state.sortOrder = '';
      state.category = '';
    },
    removeFilter(state, action: PayloadAction<{ type: string }>) {
      const { type } = action.payload;
      if (type === 'brand') {
        state.selectedBrand = '';
      } else if (type === 'price') {
        state.priceRange = [0, 1000];
      } else if (type === 'sortOrder') {
        state.sortOrder = '';
      } else if (type === 'category') {
        state.category = '';
      }else if (type === 'searchQuery') {
        state.searchQuery = ''; }
    },
  },
});

export const {
  setSelectedBrand,
  setPriceRange,
  setSortOrder,
  setCurrentPage,
  setSearchQuery,
  setCategory,
  clearFilters,
  removeFilter,
} = productsSlice.actions;

export default productsSlice.reducer;
