
interface Icoords {
    ing: number;
    lat: number;
}


export interface IOrder {
        id: number,
        from: Icoords,
        to: Icoords,
}

// export type oneOrder = {} | IOrder 

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


