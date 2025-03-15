import { createSelector, createSlice } from "@reduxjs/toolkit";
import Product from "../models/Product";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";


type initialStateType = {
    products: Product[]
}

const initialState: initialStateType = {
    products: [
        { name: 'Apple', price: 100, id: 0 },
        { name: 'Pizza', price: 250, id: 1 },
        { name: 'Bread', price: 60, id: 2 },
    ]
}

const productsSlice = createSlice({
    // как выглядит срез
    name: 'productsSlice',// название
    initialState: initialState, // как выглядит изначально
    reducers: {// кка может меняться
        addProduct(state, action: PayloadAction<Omit<Product,'id'>>) {
            state.products.push({...action.payload, id:state.products.length})
        },
    }, //как сожет меняться

    //extraReducers позволяют подлючатся к другим слайсам
})

export const { addProduct } = productsSlice.actions
export default productsSlice.reducer


//const items = (state: RootState) => state.productsSlice.products;

//export const allProductsSelector = createSelector([items], (items) => items);

const items = (store: RootState)=>store.productsSlice
export const allProductsSelector = createSelector([items],(items)=>items.products)