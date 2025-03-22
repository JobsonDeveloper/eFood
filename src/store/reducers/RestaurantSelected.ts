import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Menu from '../../model/Menu'

type RestaurantSelectedProps = {
  restaurantName: string
  restaurantType: string
  restaurantImage: string
  menu: Menu[]
}

const data = sessionStorage.getItem('restaurant')

let initialState: RestaurantSelectedProps = {
  restaurantName: '',
  restaurantType: '',
  restaurantImage: '',
  menu: []
}

if (data) {
  initialState = JSON.parse(data)
}

const RestaurantSelectedSlice = createSlice({
  name: 'restaurantSelected',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<RestaurantSelectedProps>) => {
      state.restaurantImage = action.payload.restaurantImage
      state.restaurantName = action.payload.restaurantName
      state.restaurantType = action.payload.restaurantType
      state.menu = action.payload.menu

      sessionStorage.setItem('restaurant', JSON.stringify(state))
    }
  }
})

export const { add } = RestaurantSelectedSlice.actions
export default RestaurantSelectedSlice.reducer
