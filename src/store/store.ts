import { configureStore } from "@reduxjs/toolkit";
import carrinhoSlice from './reducers/Carrinho'

const store = configureStore({
    reducer: {
        carrinho: carrinhoSlice
    }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store