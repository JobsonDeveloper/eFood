import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './reducers/Cart'
import RestaurantSelectedSlice from './reducers/RestaurantSelected'
import SelectedDishSlice from './reducers/SelectedDish'
import changeShow from './reducers/Cart'
import LoadingSlice from './reducers/Loading'
import RestaurantSlice from './reducers/Restaurant'
import Api from '../services/Api'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurantSelected: RestaurantSelectedSlice,
    SelectedDishSlice: SelectedDishSlice,
    showSidebar: changeShow,
    loading: LoadingSlice,
    restaurant: RestaurantSlice,
    [Api.reducerPath]: Api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
