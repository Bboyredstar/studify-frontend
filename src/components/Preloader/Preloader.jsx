import React from 'react'
import styles from './Preloader.module.css'

export const Preloader = () => {
  return (
    <div className={styles.preloaderWrapper}>
      <span className={styles.square}></span>
      <span className={styles.square}></span>
      <span className={styles.square}></span>
      <span className={styles.square}></span>
    </div>
  )
}
