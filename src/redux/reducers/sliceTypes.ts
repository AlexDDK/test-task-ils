import { LatLngExpression } from "leaflet";

interface Icoords {
    lng: number;
    lat: number;
}


export interface IOrder {
        id: number,
        from: Icoords,
        to: Icoords,
}

export interface IOrderList {
    orders: IOrder[],
    isLoading: boolean,
    error: string
}

export interface IOrderState {
    current: IOrder,
    isLoading: boolean,
    polyline: LatLngExpression[],
    error: string
}



