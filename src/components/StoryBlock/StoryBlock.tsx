import React, { useState, useEffect } from 'react'
import styles from './StoryBlock.module.scss'
import { ScrollArrow } from '../utils/ScrollArrow/ScrollArrow'
import { OptimizedBackground } from '../utils/OptimizedBackground/OptimizedBackground'

interface StoryItem {
  text: string
  image: {
    avif: string
    webp: string
    jpg: string
  }
}

interface StoryBlockProps {
  title: string
  items: StoryItem[]
  onScrollClick?: () => void
  backgroundImage: {
    avif: string
    webp: string
    jpg: string
  }
  showArrow?: boolean
  startAnimation?: boolean
}

export const StoryBlock: React.FC<StoryBlockProps> = ({ 
  title, 
  items, 
  onScrollClick, 
  backgroundImage,
  showArrow = true,
  startAnimation = false
}) => {
  const [showTitle, setShowTitle] = useState(false)
  const [showItems, setShowItems] = useState<boolean[]>(new Array(items.length).fill(false))
  const [showArrowState, setShowArrowState] = useState(false)

  useEffect(() => {
    if (!startAnimation) {
      setShowTitle(false)
      setShowItems(new Array(items.length).fill(false))
      setShowArrowState(false)
      return
    }

    const titleTimer = setTimeout(() => {
      setShowTitle(true)
    }, 500)
    
    const itemTimers = items.map((_, index) => {
      return setTimeout(() => {
        setShowItems(prev => {
          const newItems = [...prev]
          newItems[index] = true
          return newItems
        })
        
        if (index === items.length - 1) {
          setTimeout(() => setShowArrowState(true), 1000)
        }
      }, 1000 + index * 1500)
    })

    return () => {
      clearTimeout(titleTimer)
      itemTimers.forEach(timer => clearTimeout(timer))
    }
  }, [items.length, startAnimation])

  return (
    <div className={styles.storyBlock}>
      <OptimizedBackground image={backgroundImage} />
      <div className={styles.content}>
        <h2 className={`${styles.title} ${showTitle ? styles.show : ''}`}>
          {title}
        </h2>
        <div className={styles.items}>
          {items.map((item, index) => (
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
        {showArrow && onScrollClick && <ScrollArrow show={showArrowState} onClick={onScrollClick} />}
      </div>
    </div>
  )
} 