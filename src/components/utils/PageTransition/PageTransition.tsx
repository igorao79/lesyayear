import React, { useEffect, useState } from 'react'
import styles from './PageTransition.module.scss'

interface PageTransitionProps {
  onTransitionEnd: () => void
}

export const PageTransition: React.FC<PageTransitionProps> = ({ onTransitionEnd }) => {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
      onTransitionEnd()
    }, 1000)

    return () => clearTimeout(timer)
  }, [onTransitionEnd])

  return (
    <div className={`${styles.transition} ${isAnimating ? styles.animate : ''}`}>
      <div className={styles.heart}>❤️</div>
    </div>
  )
} 