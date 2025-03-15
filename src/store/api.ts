import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Product from '../models/Product';

interface ResponseType {
    products: Product[]
}
// создать файл ....Api.js  папака
export const api = createApi({
    reducerPath: 'productsApi', // аналог названия
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/',
    }),
    // build.mutation<ReturnType, ArgType>
    endpoints: (build) => ({
        addProduct: build.mutation<null, Partial<Product>>({
            query: (body) => ({
                url: "products",
                method: "POST",
                body: body //toISOString это универсальный формат для записи даты в виде строки
            })
            , invalidatesTags: ['Products']
        }),
        removeProduct: build.mutation<null, Partial<Product>>({
            query: (body) => ({
                url: "products",
                method: "DELETE",
                body: body //toISOString это универсальный формат для записи даты в виде строки
            })
            , invalidatesTags: ['Products']
        }),
        discountProduct: build.mutation<null, Partial<Product>>({
            query: (body) => ({
                url: "products",
                method: "PATCH",
                body: body //toISOString это универсальный формат для записи даты в виде строки
            })
            , invalidatesTags: ['Products']
        }),
        getProducts: build.query<ResponseType, void>({
            query: () => { return "products" },
            providesTags: ['Products']
        }),
    })
})


export const { useGetProductsQuery, useRemoveProductMutation,useDiscountProductMutation, useAddProductMutation } = api;// экспорт хук для каждого инпоинта
