import React from 'react'
import MapCont from '../mapCont/MapCont'
import TableCont from '../tableCont/TableCont'
import styles from './layout.module.css'

export default function Layout() {

  return (
    <div className={styles.mainContainer}>
        <TableCont />
        <MapCont />
    </div>
  )
}
