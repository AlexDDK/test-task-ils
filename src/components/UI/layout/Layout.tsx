import MapCont from '../../controllers/mapCont/MapCont'
import TableCont from '../../controllers/tableCont/TableCont'
import styles from './layout.module.css'

export default function Layout() {

  return (
    <div className={styles.mainContainer}>
        <TableCont />
        <MapCont />
    </div>
  )
}
