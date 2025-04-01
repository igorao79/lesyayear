import React, { useEffect, useState } from 'react'
import styles from './PageTransition.module.scss'

interface PageTransitionProps {
  onTransitionEnd: () => void
  onScrollStart: () => void
  isVisible: boolean
  direction?: 'up' | 'down'
}

export const PageTransition: React.FC<PageTransitionProps> = ({ 
  onTransitionEnd, 
  onScrollStart, 
  isVisible,
  direction = 'down' 
}) => {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    // Сначала показываем анимацию
    const showAnimation = setTimeout(() => {
      // После небольшой задержки начинаем скролл
      onScrollStart()
    }, 400)

    // Анимация длится 1.5 секунды
    const hideAnimation = setTimeout(() => {
      setIsAnimating(false)
      onTransitionEnd()
    }, 800)

    return () => {
      clearTimeout(showAnimation)
      clearTimeout(hideAnimation)
    }
  }, [onTransitionEnd, onScrollStart])

  return (
    <>
      <div className={`${styles.transition} ${isAnimating ? styles.animate : ''} ${direction === 'up' ? styles.up : ''}`}>
        <div className={styles.heart}>❤️</div>
      </div>
      <div style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
        {/* Здесь будут блоки */}
      </div>
    </>
  )
} 