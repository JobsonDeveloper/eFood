import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SelectedDishProps = {
  id: number
  name: string
  image: string
  description: string
  emphasis: string
  value: number
}

const initialState: SelectedDishProps = {
  id: -1,
  name: '',
  image: '',
  description: '',
  emphasis: '',
  value: 0
}

const SelectedDishSlice = createSlice({
  name: 'selectedDish',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<SelectedDishProps>) => {
      const { name, image, description, value, emphasis } = action.payload

      state.name = name
      state.image = image
      state.description = description
      state.value = value
      state.emphasis = emphasis
    }
  }
})

export const { add } = SelectedDishSlice.actions
export default SelectedDishSlice.reducer
