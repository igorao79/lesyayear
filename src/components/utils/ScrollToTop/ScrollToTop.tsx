import React from 'react'
import styles from './ScrollToTop.module.scss'

interface ScrollToTopProps {
  onClick: () => void
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ onClick }) => {
  return (
    <div className={styles.scrollToTop} onClick={onClick}>
      <span className={styles.arrow}>↑</span>
    </div>
  )
}

export default ScrollToTop 