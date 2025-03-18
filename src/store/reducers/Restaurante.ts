import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Restaurante from "../../model/Restaurante"

type RestauranteProps = {
    item: Restaurante[]
}

const initialState: RestauranteProps = {
    item: []
}

const RestauranteSlice = createSlice({
    name: 'restaurante',
    initialState,
    reducers: {
        atualizar: (state, action: PayloadAction<Restaurante[]>) => {
            state.item = action.payload
        }
    }
})

export const { atualizar } = RestauranteSlice.actions
export default RestauranteSlice.reducer