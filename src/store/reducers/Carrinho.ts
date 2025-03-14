import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Produto from '../../model/Produto'

type CarrinhoState = {
  itens: Produto[]
  show: boolean
}

const initialState: CarrinhoState = {
  itens: [],
  show: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<Produto, 'id'>>) => {
      const novoId = state.itens.length - 1
      const novoProduto = {
        id: novoId,
        name: action.payload.name,
        value: action.payload.value,
        image: action.payload.image
      }

      state.itens.push(novoProduto)
    },
    remover: (state, action: PayloadAction<Produto>) => {
      if (state.itens.length === 1) {
        state.itens = []
      } else {
        const list = state.itens.filter((item) => item.id != action.payload.id)
        state.itens = list
      }
    },
    esvaziar: (state) => {
      state.itens = []
    },
    changeShow: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload
    }
  }
})

export const { adicionar, remover, changeShow, esvaziar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
