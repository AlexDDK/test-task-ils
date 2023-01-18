export interface IOrder {
    numOfOrder: number,
    fromLat: number,
    fromIng: number,
    toLat: number,
    toIng: number,
}

export type oneOrder = {} | IOrder

export type OrderList = Array<IOrder>