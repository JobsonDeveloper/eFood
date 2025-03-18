import { configureStore } from '@reduxjs/toolkit'
import carrinhoSlice from './reducers/Carrinho'
import RestaurantSelectedSlice from './reducers/RestaurantSelected'
import SelectedDishSlice from './reducers/SelectedDish'
import changeShow from './reducers/Carrinho'
import LoadingSlice from './reducers/Loading'
import RestauranteSlice from './reducers/Restaurante'
import Api from '../services/Api'

const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
    restaurantSelected: RestaurantSelectedSlice,
    SelectedDishSlice: SelectedDishSlice,
    showSidebar: changeShow,
    loading: LoadingSlice,
    restaurante: RestauranteSlice,
    [Api.reducerPath]: Api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
