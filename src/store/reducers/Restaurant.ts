import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Restaurant from "../../model/Restaurant"

type RestaurantProps = {
    item: Restaurant[]
}

const initialState: RestaurantProps = {
    item: []
}

const RestaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<Restaurant[]>) => {
            state.item = action.payload
        }
    }
})

export const { update } = RestaurantSlice.actions
export default RestaurantSlice.reducer