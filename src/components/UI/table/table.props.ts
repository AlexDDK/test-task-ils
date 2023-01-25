import { IOrderList } from "../../../redux/reducers/sliceTypes";

export interface ITableProps {
    orderList: IOrderList
    clickHandler: (id: number) => void
    id: number
}