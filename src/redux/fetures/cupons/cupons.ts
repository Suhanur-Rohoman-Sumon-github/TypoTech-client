import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CouponState = {
  coupon: string;
  discount: number;
  isCouponValid: boolean;
  errorMessage: string;
  currentPrice: number;
}

const initialState: CouponState = {
  coupon: '',
  discount: 0,
  isCouponValid: false,
  errorMessage: '',
  currentPrice: 0,
};

const validCoupons = {
  DISCOUNT10: 0.1,
  DISCOUNT20: 0.2,
};

type ValidCouponKeys = keyof typeof validCoupons;

const isValidCoupon = (coupon: string): coupon is ValidCouponKeys => {
  return coupon in validCoupons;
};

const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    setCoupon(state, action: PayloadAction<string>) {
      state.coupon = action.payload;
    },
    applyCoupon(state, action: PayloadAction<number>) {
      
      if (isValidCoupon(state.coupon)) {
        state.discount = validCoupons[state.coupon];
        state.isCouponValid = true;
        state.errorMessage = '';
        state.currentPrice = action.payload;
      } else {
        state.discount = 0;
        state.isCouponValid = false;
        state.errorMessage = 'Invalid coupon code.';
      }
    },
    resetCoupon(state) {
      state.coupon = '';
      state.discount = 0;
      state.isCouponValid = false;
      state.errorMessage = '';
    },
  },
});

export const { setCoupon, applyCoupon, resetCoupon } = couponSlice.actions;

export default couponSlice.reducer;
