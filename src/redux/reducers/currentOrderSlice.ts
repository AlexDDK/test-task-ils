import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LatLngExpression } from "leaflet";
import { IOrder, IOrderState } from "./sliceTypes";

const initialState: IOrderState = {
   current: {
    id: 0,
    from: {
        lat: 0,
        lng: 0
    },
    to: {
        lat: 0,
        lng: 0
    },

   },
   polyline: [],
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
        setPolyline(state, action: PayloadAction<LatLngExpression[]>) {
            state.isLoading = false           
            state.error = ''            
            state.polyline = action.payload
        },
        orderError(state, action: PayloadAction<string>){
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default currentOrderSlice.reducer
export const {chooseOrder, setOrder, setPolyline, orderError} = currentOrderSlice.actions
