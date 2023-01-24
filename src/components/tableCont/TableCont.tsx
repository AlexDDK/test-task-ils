import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { fetchingList } from '../../redux/reducers/orderListSlice'
import Table from '../table/Table'

export default function TableCont() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchingList())
    }, [])
    
    const orderList = useAppSelector((state) => state.orderList.orders)
    
    const clickHandler = (id: number, e: React.MouseEvent) => {
      console.log('aaa', id)
      console.log('bbb', e.target);
      
  }



  return (
    <Table orderList={orderList} clickHandler={clickHandler}/>
  )
}
