import { baseApi } from "@/redux/api/baseapi";


const paymentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
        query: (price) => ({
          url: '/payment/create-payment-intent',
          method: 'POST',
          body: { price },
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

export const {useChangeUserPlanMutation,useCreatePaymentIntentMutation,useSavePaymentHistoryMutation } = paymentsApi;
