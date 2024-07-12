import { baseApi } from "@/redux/api/baseapi";


const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createNewCards: builder.mutation({
      query: (cards) => ({
        url: "/carts",
        method: "POST",
        body:cards
      }),
      invalidatesTags:["carts"]
    }),
    getUserId: builder.query({
        query: () => ({
            url: `/carts/id`, 
            method: "GET"
        }),
        
        providesTags:["carts"]
      }),
      getSingleUSerCart: builder.query({
        query: (id) => ({
            url: `/carts/${id}`, 
            method: "GET"
        }),
        providesTags:["carts"]
      }),
      deleteProducts: builder.mutation({
        query: (id) => ({
            url: `/carts/${id}`, 
            method: "DELETE"
        }),
        invalidatesTags:["carts"]
      }),
      
  }),
});

export const { useCreateNewCardsMutation,useGetUserIdQuery,useGetSingleUSerCartQuery,useDeleteProductsMutation } = productsApi;
