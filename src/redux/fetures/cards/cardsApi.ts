import { baseApi } from "@/redux/api/baseapi";


const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createNewCards: builder.mutation({
      query: (cards) => ({
        url: "/carts",
        method: "POST",
        body:cards
      }),
    }),
    getUserId: builder.query({
        query: () => ({
            url: `/carts/userId`, 
            method: "GET"
        }),
      }),
      getSingleUSerCart: builder.query({
        query: (id) => ({
            url: `/carts/${id}`, 
            method: "GET"
        }),
      }),
  }),
});

export const { useCreateNewCardsMutation,useGetUserIdQuery,useGetSingleUSerCartQuery } = productsApi;
