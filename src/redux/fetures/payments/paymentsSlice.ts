import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaymentState {
  selectedPayment: string | null;
  isStripe: boolean;
}

const initialState: PaymentState = {
  selectedPayment: null,
  isStripe: true,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentMethod(state, action: PayloadAction<string>) {
      state.selectedPayment = action.payload;
      state.isStripe = action.payload === "Stripe";
    },
    resetPaymentMethod(state) {
      state.selectedPayment = null;
      state.isStripe = true;
    },
  },
});

export const { setPaymentMethod, resetPaymentMethod } = paymentSlice.actions;
export default paymentSlice.reducer;
