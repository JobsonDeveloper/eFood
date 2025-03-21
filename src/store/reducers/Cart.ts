import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Product from '../../model/Product'

type CartState = {
  items: Product[]
  show: boolean
}

const initialState: CartState = {
  items: [],
  show: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Omit<Product, 'id'>>) => {
      const newId = state.items.length + 1
      const newProduct = {
        id: newId,
        name: action.payload.name,
        value: action.payload.value,
        image: action.payload.image
      }

      state.items.push(newProduct)
    },
    remove: (state, action: PayloadAction<Product>) => {
      if (state.items.length === 1) {
        state.items = []
      } else {
        const list = state.items.filter((item) => item.id != action.payload.id)
        state.items = list
      }
    },
    clear: (state) => {
      state.items = []
    },
    changeShow: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload
    }
  }
})

export const { add, remove, changeShow, clear } = cartSlice.actions
export default cartSlice.reducer
