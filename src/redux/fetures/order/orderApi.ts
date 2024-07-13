import { baseApi } from "@/redux/api/baseapi";


const paymentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
        query: (orderinfo) => ({
          url: '/orders',
          method: 'POST',
          body:  orderinfo ,
        }),
        
      }),
      savePaymentHistory: builder.mutation({
        query: (paymentsData) => ({
          url: '/save-payment-history',
          method: 'POST',
          body: { paymentsData },
        }),
      }),
      changeUserPlan: builder.mutation({
        query: ({ email, plane }) => ({
          url: `users/change-user-plane?email=${email}`,
          method: 'PATCH',
          body: { plane },
        }),
      }),
      
  }),
});

export const {useCreateOrderMutation} = paymentsApi;
