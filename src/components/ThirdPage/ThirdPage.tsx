import React, { useState, useEffect } from 'react'
import styles from '../SecondPage/Story.module.scss'
import stylesb from './ThirdPage.module.scss'
import { ScrollArrow } from '../FirstPage/ScrollArrow/ScrollArrow'

interface StoryItem {
  text: string
  image: string
}

const storyItems: StoryItem[] = [
  {
    text: 'Впервые побывать в столице',
    image: '/lesyayear/images/travel.jpg'
  },
  {
    text: 'Почувствовать морзкой бриз',
    image: '/lesyayear/images/support.jpg'
  }
]

interface ThirdPageProps {
  onScrollClick?: () => void
}

export const ThirdPage: React.FC<ThirdPageProps> = ({ onScrollClick }) => {
  const [showTitle, setShowTitle] = useState(false)
  const [showItems, setShowItems] = useState<boolean[]>(new Array(storyItems.length).fill(false))
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setShowTitle(true)
    }, 500)
    
    const itemTimers = storyItems.map((_, index) => {
      return setTimeout(() => {
        setShowItems(prev => {
          const newItems = [...prev]
          newItems[index] = true
          return newItems
        })
        
        if (index === storyItems.length - 1) {
          setTimeout(() => setShowArrow(true), 1000)
        }
      }, 1000 + index * 1500)
    })

    return () => {
      clearTimeout(titleTimer)
      itemTimers.forEach(timer => clearTimeout(timer))
    }
  }, [])

  return (
    <div className={`${stylesb.story} ${styles.story}`}>
      <h2 className={`${styles.title} ${showTitle ? styles.show : ''}`}>
        А также мы научились...
      </h2>
      <div className={styles.items}>
        {storyItems.map((item, index) => (
          <div key={index} className={`${styles.item} ${showItems[index] ? styles.show : ''}`}>
            <p className={styles.text}>{item.text}</p>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.text} className={styles.image} />
            </div>
          </div>
        ))}
      </div>
      {onScrollClick && <ScrollArrow show={showArrow} onClick={onScrollClick} />}
    </div>
  )
}