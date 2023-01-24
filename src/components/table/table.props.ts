import { IOrder } from "../../redux/reducers/sliceTypes";

export interface ITableProps {
    orderList: IOrder[]
    clickHandler: (id: number) => void
    id: number
}