import React from 'react'
import styles from './loader.module.css'

export default function Loader() {
  return (
    <>
    <p><b>Loading order list...</b></p>
    <div className={styles.loader}></div>
    </>
  )
}
