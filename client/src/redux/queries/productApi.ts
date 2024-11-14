import { AllProductsResponse } from "@/models/product.model";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<AllProductsResponse, void>({
      query: () => "/product/getAll",
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
