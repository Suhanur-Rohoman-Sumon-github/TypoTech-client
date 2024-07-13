import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaymentState {
  selectedPayment: string | null;
  isStripe: boolean;
  price:number
}

const initialState: PaymentState = {
  selectedPayment: "cash on delivery",
  isStripe: true,
  price:0
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
    setProductPrice(state, action: PayloadAction<number>) {
     state.price = action.payload
    },
  },
});

export const { setPaymentMethod, resetPaymentMethod,setProductPrice } = paymentSlice.actions;
export default paymentSlice.reducer;
