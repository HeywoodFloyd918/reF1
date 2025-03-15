import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { api } from "./api";

export const store = configureStore({// глобальное хранилище из срезов
    // соединяем reducer - срез
    reducer: {
        productsSlice: productsSlice,
        [api.reducerPath]:api.reducer  //подключаем слайс
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(api.middleware) //
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;