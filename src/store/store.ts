import { configureStore } from "@reduxjs/toolkit";
import carrinhoSlice from './reducers/Carrinho'
import RestaurantSelectedSlice from './reducers/RestaurantSelected'

const store = configureStore({
    reducer: {
        carrinho: carrinhoSlice,
        restaurantSelected: RestaurantSelectedSlice
    }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store