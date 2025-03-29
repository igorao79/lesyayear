import React, { useState, useEffect } from 'react'
import styles from './FourthPage.module.scss'

export const FourthPage: React.FC = () => {
  const [showTexts, setShowTexts] = useState<boolean[]>(new Array(3).fill(false))
  const [showGifs, setShowGifs] = useState(false)

  useEffect(() => {
    // Показываем тексты последовательно
    const textTimers = [0, 1, 2].map((index) => {
      return setTimeout(() => {
        setShowTexts(prev => {
          const newTexts = [...prev]
          newTexts[index] = true
          return newTexts
        })
        
        // После показа всех текстов показываем гифки
        if (index === 2) {
          setTimeout(() => setShowGifs(true), 1000)
        }
      }, 1000 + index * 1500)
    })

    return () => {
      textTimers.forEach(timer => clearTimeout(timer))
    }
  }, [])

  return (
    <div className={styles.fourthPage}>
      <div className={styles.content}>
        <h2 className={`${styles.text} ${showTexts[0] ? styles.show : ''}`}>
          Спасибо тебе за все
        </h2>
        <h2 className={`${styles.text} ${showTexts[1] ? styles.show : ''}`}>
          Я очень тебя люблю
        </h2>
        <h2 className={`${styles.text} ${showTexts[2] ? styles.show : ''}`}>
          Надеюсь мы будем всегда вместе
        </h2>
        <div className={`${styles.gifsContainer} ${showGifs ? styles.show : ''}`}>
          <img src="/images/kotikleft.gif" alt="Love gif 1" className={styles.gif} />
          <img src="/images/kotikright.gif" alt="Love gif 2" className={styles.gif} />
        </div>
      </div>
    </div>
  )
} 