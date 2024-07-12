import { baseApi } from "../../api/baseapi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ search, filter, sort, fields,limits }) => {
        const params: Record<string, string> = {};
        if (search) params.searchTerm  = search;
        if (filter) params.filter = filter;
        if (sort) params.sort = sort;
        if (fields) params.fields = fields;
        if (limits) params.limit = limits;

        return {
          url: "/products",
          method: "GET",
          params,
        };
      },
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        

        return {
          url: `/products/${id}`,
          method: "GET",
          
        };
      },
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
