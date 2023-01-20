import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { oneOrder } from "./sliceTypes";

const currentOrderSlice = createSlice({
    name: 'currentOrder',
    initialState: {},
    reducers: {
        chooseOrder: (state, action: PayloadAction<oneOrder>) =>  state = action.payload
    }
})

export default currentOrderSlice.reducer
export const {chooseOrder} = currentOrderSlice.actions
