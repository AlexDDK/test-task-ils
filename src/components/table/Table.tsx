import { ITableProps } from './table.props'
import styles from './table.module.css'
import cn from 'classnames'


export default function Table(props: ITableProps) {

  const {orderList, clickHandler, id} = props
    

  return (
    <div className={styles.tableContainer}>
        {orderList.map((el, i) => {
            return (
                <div className={cn(styles.table, [
                  el.id === id ? styles.active : ''
                ])} key={el.id} onClick={(e) => clickHandler(el.id)}>
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
