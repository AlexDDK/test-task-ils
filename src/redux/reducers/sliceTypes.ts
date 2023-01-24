
interface Icoords {
    ing: number;
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
    error: string
}


