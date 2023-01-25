import { ITableProps } from './table.props'
import styles from './table.module.css'
import cn from 'classnames'
import Loader from '../loader/Loader'


export default function Table(props: ITableProps) {

  const {orderList, clickHandler, id} = props
    

  return (
    <>
    {orderList.isLoading ? (
      <div className={styles.tableContainer}>
        <Loader />
      </div>
    ) : (
      <>
        <div className={styles.tableContainer}>
          <div className={styles.tableRow}>
            <div className={cn(styles.gridItem, styles.head)}>Номер заявки</div>
            <div className={cn(styles.gridItem, styles.head)}>Координаты от lat</div>
            <div className={cn(styles.gridItem, styles.head)}>Координаты от ing</div>
            <div className={cn(styles.gridItem, styles.head)}>Координаты до lat</div>
            <div className={cn(styles.gridItem, styles.head)}>Координаты до ing</div>
          </div>
          {orderList.orders.map((el, i) => {
            return (
              <div className={cn(styles.tableRow, styles.cursor, [
                   el.id === id ? styles.active : '',
                   i%2 !== 0 ? styles.odd : ''
              ])} key={el.id} onClick={(e) => clickHandler(el.id)}>
                <div className={styles.gridItem}>№{i+1}</div>
                <div className={styles.gridItem}>{el.from.lat}</div>
                <div className={styles.gridItem}>{el.from.lng}</div>
                <div className={styles.gridItem}>{el.to.lat}</div>
                <div className={styles.gridItem}>{el.to.lng}</div>
              </div>               
            )
          })
          }
        </div>
      </>
    ) }
    </>
  )
}
