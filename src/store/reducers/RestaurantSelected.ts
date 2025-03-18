import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cardapio from "../../model/Cardapio";

type RestaurantSelectedProps = {
    restaurantName: string
    restaurantType: string,
    restaurantImage: string
    cardapio: Cardapio[]
}

const dados = sessionStorage.getItem('restaurant')

let initialState: RestaurantSelectedProps = {
    restaurantName: '',
    restaurantType: '',
    restaurantImage: '',
    cardapio: []
}

if(dados) {
    initialState = JSON.parse(dados)
}

const RestaurantSelectedSlice = createSlice({
    name: 'restaurantSelected',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<RestaurantSelectedProps>) => {
            state.restaurantImage = action.payload.restaurantImage
            state.restaurantName = action.payload.restaurantName
            state.restaurantType = action.payload.restaurantType
            state.cardapio = action.payload.cardapio

            sessionStorage.setItem('restaurant', JSON.stringify(state))
        }
    }
})

export const { adicionar } = RestaurantSelectedSlice.actions
export default RestaurantSelectedSlice.reducer