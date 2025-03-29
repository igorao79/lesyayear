import React from 'react'
import styles from './Counter.module.scss'

interface CounterProps {
  number: number
  showYear: boolean
  show: boolean
}

export const Counter: React.FC<CounterProps> = ({ number, showYear, show }) => {
  return (
    <div className={`${styles.counter} ${show ? styles.show : ''}`}>
      <span className={styles.text}>Мы вместе уже</span>
      <div className={styles.counterWrapper}>
        <span className={styles.number}>{number}</span>
        <span className={`${styles.year} ${showYear ? styles.show : ''}`}>год</span>
      </div>
    </div>
  )
}