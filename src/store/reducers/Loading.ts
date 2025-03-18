import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Props = {
    value: boolean
}

const initialState: Props = {
    value: true
}

const LoadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        showLoading: (state, action: PayloadAction<boolean>) => {
         state.value = action.payload
        }
    }
})

export const { showLoading } = LoadingSlice.actions
export default LoadingSlice.reducer