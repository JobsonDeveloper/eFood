import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RestaurantSelectedProps = {
    restaurantName: string
    restaurantType: string,
    restaurantImage: string
}

const initialState: RestaurantSelectedProps = {
    restaurantName: '',
    restaurantType: '',
    restaurantImage: ''
}

const RestaurantSelectedSlice = createSlice({
    name: 'restaurantSelected',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<RestaurantSelectedProps>) => {
            state.restaurantImage = action.payload.restaurantImage
            state.restaurantName = action.payload.restaurantName
            state.restaurantType = action.payload.restaurantType

            sessionStorage.setItem('restaurant', JSON.stringify(state))
        }
    }
})

export const { adicionar } = RestaurantSelectedSlice.actions
export default RestaurantSelectedSlice.reducer