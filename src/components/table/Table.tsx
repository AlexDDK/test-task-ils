import React from 'react'
import { ITableProps } from './table.props'
import styles from './table.module.css'


export default function Table(props: ITableProps) {

  const {orderList, clickHandler} = props
    

  return (
    <div className={styles.tableContainer}>
        {orderList.map((el, i) => {
            return (
                <div className={styles.table} key={el.id} onClick={(e) => clickHandler(el.id, e)}>
                    <div className={styles.gridItem}>№{i+1}</div>
                    <div className={styles.gridItem}>{el.from.lat}</div>
                    <div className={styles.gridItem}>{el.from.ing}</div>
                    <div className={styles.gridItem}>{el.to.lat}</div>
                    <div className={styles.gridItem}>{el.to.ing}</div>
                </div>               
            )
        })}
    </div>
  )
}
