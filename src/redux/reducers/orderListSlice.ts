import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder, IOrderList } from "./sliceTypes";

const initialState: IOrderList = {
    orders: [],
    isLoading: false,
    error: ''
}

const orderListSlice = createSlice({
    name: 'orderList',
    initialState,
    reducers : {
        fetchingList(state) {
            state.isLoading = true
        },
        fetchingListSuccess(state, action: PayloadAction<IOrder[]>) {
            state.isLoading = false
            state.error = ''
            state.orders = action.payload
        },
        fetchingListError(state, action: PayloadAction<string>){
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default orderListSlice.reducer
export const {fetchingList, fetchingListSuccess, fetchingListError} = orderListSlice.actions