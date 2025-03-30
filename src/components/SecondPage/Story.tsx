import React, { useState, useEffect } from 'react'
import styles from './Story.module.scss'
import { ScrollArrow } from '../FirstPage/ScrollArrow/ScrollArrow' // Обновленный путь

interface StoryItem {
  text: string
  image: {
    avif: string
    webp: string
    jpg: string
  }
}

const storyItems: StoryItem[] = [
  {
    text: 'Познакомиться и полюбить друг друга',
    image: {
      avif: '/lesyayear/images/us/meet.avif',
      webp: '/lesyayear/images/us/meet.webp',
      jpg: '/lesyayear/images/us/meet.jpg'
    }
  },
  {
    text: 'Пройти через многие трудности',
    image: {
      avif: '/lesyayear/images/us/memories.avif',
      webp: '/lesyayear/images/us/memories.webp',
      jpg: '/lesyayear/images/us/memories.jpg'
    }
  }
]

interface StoryProps {
  onScrollClick: () => void
}

export const Story: React.FC<StoryProps> = ({ onScrollClick }) => {
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
    <div className={styles.story}>
      <div className={styles.content}>
      <h2 className={`${styles.title} ${showTitle ? styles.show : ''}`}>
        За это время мы смогли...
      </h2>
      <div className={styles.items}>
        {storyItems.map((item, index) => (
          <div key={index} className={`${styles.item} ${showItems[index] ? styles.show : ''}`}>
            <p className={styles.text}>{item.text}</p>
            <div className={styles.imageWrapper}>
              <picture>
                <source srcSet={item.image.avif} type="image/avif" />
                <source srcSet={item.image.webp} type="image/webp" />
                <img src={item.image.jpg} alt={item.text} className={styles.image} />
              </picture>
            </div>
          </div>
        ))}
      </div>
      <ScrollArrow show={showArrow} onClick={onScrollClick} />
      </div>
    </div>
  )
}