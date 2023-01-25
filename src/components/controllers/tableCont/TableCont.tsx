import { useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks'
import { chooseOrder } from '../../../redux/reducers/currentOrderSlice'
import { fetchingList } from '../../../redux/reducers/orderListSlice'
import { currentOrderSelector, orderListSelector } from '../../../redux/selectors/selectors'
import Table from '../../UI/table/Table'

export default function TableCont() {

    const dispatch = useAppDispatch()
    const choosenOrder = useAppSelector(currentOrderSelector)
    const orderList = useAppSelector(orderListSelector)

    useEffect(() => {
      dispatch(fetchingList())
    }, [])
    
    const clickHandler = (id: number) => {
      const order = orderList.orders.find((el) => el.id === id)  
      order && dispatch(chooseOrder(order))
    }

    return (
      <Table orderList={orderList} clickHandler={clickHandler} id={choosenOrder.id}/>
    )
}
