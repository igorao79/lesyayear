import React from 'react'
import styles from './ScrollArrow.module.scss'

interface ScrollArrowProps {
  show: boolean
  onClick: () => void
}

export const ScrollArrow: React.FC<ScrollArrowProps> = ({ show, onClick }) => {
  return (
    <div className={styles.container}>
      <div 
        className={`${styles.arrow} ${show ? styles.show : ''}`}
        onClick={onClick}
      >
        ↓
      </div>
    </div>
  )
} 