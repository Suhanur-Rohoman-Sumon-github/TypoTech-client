import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state interface
type OrderState = {
  orderInfo: {
    orderID: string;
    products: string[]; // Example: Array of product IDs
    status: 'Fulfilled' | 'Declined';
    
   
    charges: {
      subtotal: number;
      shipping: number;
      tax: number;
      total: number;
    };
    paymentType: string;
    shippingInformation: {
      email: string;
      firstName: string;
      lastName: string;
      address: string;
      city: string;
      zip: string;
    };
  };
  isSubmitted:boolean
};

// Define initial state values
const initialState: OrderState = {
  orderInfo: {
    orderID: '6052b3cc3f6ebc0474eb4851',
    products: [],
    status: 'Fulfilled',
    
    
    charges: {
      subtotal: 0,
      shipping: 0,
      tax: 0,
      total: 0,
    },
    paymentType: 'Credit Card',
    shippingInformation: {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      zip: '',
    },
  },
  isSubmitted:false ,
};

// Create the order slice
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateOrderInfo(state, action: PayloadAction<OrderState['orderInfo']>) {
      state.orderInfo = action.payload;
    },
    updatePriceInfo(state, action: PayloadAction<OrderState['orderInfo']['charges']>) {
      state.orderInfo.charges = action.payload;
    },
    updatePaymentType(state, action: PayloadAction<string>) {
      state.orderInfo.paymentType = action.payload;
    },
    updateProducts(state, action: PayloadAction<string[]>) {
        state.orderInfo.products = [...state.orderInfo.products, ...action.payload];
      },
    updateContactInfo(state, action: PayloadAction<OrderState['orderInfo']['shippingInformation']>) {
      state.orderInfo.shippingInformation = action.payload;
    },
    updateIsSubmitted(state, action: PayloadAction<boolean>) {
      state.isSubmitted = action.payload;
    },
  },
});


export const { updateOrderInfo, updatePriceInfo, updatePaymentType, updateContactInfo,updateProducts, updateIsSubmitted } = orderSlice.actions;
export default orderSlice.reducer;
