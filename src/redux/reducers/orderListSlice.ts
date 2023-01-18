import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderList } from "./sliceTypes";

const initialState: OrderList = []

const orderListSlice = createSlice({
    name: 'orderList',
    initialState,
    reducers : {
        addList: (state, action: PayloadAction<OrderList>) =>  state = action.payload
    }
})

export default orderListSlice.reducer
export const {addList} = orderListSlice.actions