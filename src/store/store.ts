import { configureStore } from '@reduxjs/toolkit'
import carrinhoSlice from './reducers/Carrinho'
import RestaurantSelectedSlice from './reducers/RestaurantSelected'
import SelectedDishSlice from './reducers/SelectedDish'
import changeShow from './reducers/Carrinho'

const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
    restaurantSelected: RestaurantSelectedSlice,
    SelectedDishSlice: SelectedDishSlice,
    showSidebar: changeShow
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
