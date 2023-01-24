import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder, IOrderState } from "./sliceTypes";

const initialState: IOrderState = {
   current: {
    id: 0,
    from: {
        lat: 0,
        ing: 0
    },
    to: {
        lat: 0,
        ing: 0
    },

   },
   isLoading: false,
   error: ''
}

const currentOrderSlice = createSlice({
    name: 'currentOrder',
    initialState,
    reducers: {
        chooseOrder(state, action: PayloadAction<IOrder>) {
            state.isLoading = true           
        },
        setOrder(state, action: PayloadAction<IOrder>) {
            state.isLoading = false           
            state.error = ''            
            state.current = action.payload
        },
        orderError(state, action: PayloadAction<string>){
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default currentOrderSlice.reducer
export const {chooseOrder, setOrder, orderError} = currentOrderSlice.actions
