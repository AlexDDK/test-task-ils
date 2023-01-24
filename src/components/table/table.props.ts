import { IOrder } from "../../redux/reducers/sliceTypes";

export interface ITableProps {
    orderList: IOrder[]
    clickHandler: (id: number, e: React.MouseEvent) => void
}