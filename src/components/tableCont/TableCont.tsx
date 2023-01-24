import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { chooseOrder } from '../../redux/reducers/currentOrderSlice'
import { fetchingList } from '../../redux/reducers/orderListSlice'
import Table from '../table/Table'

export default function TableCont() {

    const dispatch = useAppDispatch()
    const [id, setId] = useState(0)

    useEffect(() => {
      dispatch(fetchingList())
    }, [])
    
    const orderList = useAppSelector((state) => state.orderList.orders)
    
    const clickHandler = (id: number) => {
      setId(id)
      const order = orderList.find((el) => el.id === id)  
      order && dispatch(chooseOrder(order))
    }



    return (
      <Table orderList={orderList} clickHandler={clickHandler} id={id}/>
    )
}
