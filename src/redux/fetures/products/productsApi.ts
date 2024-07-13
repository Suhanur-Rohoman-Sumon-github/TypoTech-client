
import { baseApi } from "../../api/baseapi";


const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ search, sort, fields, limits }) => {
        const params: Record<string, unknown> = {};
        if (search) params.searchTerm = search;
        if (sort) params.sort = sort;
        if (fields) params.fields = fields;
        if (limits) params.limit = limits;

        return {
          url: "/products",
          method: "GET",
          params,
        };
      },
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["products"],
    }),
    addProducts: builder.mutation({
      query: (data) => {
        
        return {
          url: `/products`,
          method: "POST",
          body:data
        };
      },
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }: { id: string; data: Record<string, unknown> }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useDeleteProductMutation,
  useAddProductsMutation,
  useUpdateProductMutation
} = productsApi;
