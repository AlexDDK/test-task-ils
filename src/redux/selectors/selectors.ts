import {RootState} from '../store/store'

export const currentOrderSelector = (state: RootState) => state.currentOrder.current
export const currentPolylineSelector =(state: RootState) => state.currentOrder.polyline

export const orderListSelector = (state: RootState) => state.orderList