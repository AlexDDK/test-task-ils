import { combineReducers } from '@reduxjs/toolkit'
import currentOrderSlice from './currentOrderSlice'
import orderListSlice from './orderListSlice'


export const rootReducer = combineReducers({
    orderList: orderListSlice,
    currentOrder: currentOrderSlice
})

