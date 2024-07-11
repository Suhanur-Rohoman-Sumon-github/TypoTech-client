import { baseApi } from "../../api/baseapi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        
        console.log("ID passed to query:", id); // Log the id here
        return {
           
          url: `/products/${id}`, // Use the id dynamically
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
