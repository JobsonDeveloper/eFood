import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Produto from "../../model/Produto";

type CarrinhoState = {
    itens: Produto[]
}

const initialState: CarrinhoState = {
    itens: []
}

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Produto>) => {
            state.itens.push(action.payload)
        },
        remover: (state, action: PayloadAction<Produto>) => {
            const list = state.itens.filter((item) => item.id != action.payload.id)

            state.itens = list
        }
    }
})

export const  { adicionar, remover } = carrinhoSlice.actions
export default carrinhoSlice.reducer