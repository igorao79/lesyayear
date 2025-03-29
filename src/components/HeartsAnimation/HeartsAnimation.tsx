import React, { useEffect, useState, useRef } from 'react'
import styles from './HeartsAnimation.module.scss'

const MAX_HEARTS = 15
const HEARTS = ['❤️', '💖', '💝', '💕', '💗', '💓', '💞', '💘']

interface Heart {
  id: number
  emoji: string
  left: number
  animationDuration: number
  delay: number
}

export const HeartsAnimation: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([])
  const animationRef = useRef<number>()
  const isActiveRef = useRef(true)

  useEffect(() => {
    const createHeart = () => {
      if (!isActiveRef.current) return
      
      const newHeart: Heart = {
        id: Date.now(),
        emoji: HEARTS[Math.floor(Math.random() * HEARTS.length)],
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }

      setHearts(prevHearts => {
        const updatedHearts = [...prevHearts, newHeart]
        if (updatedHearts.length > MAX_HEARTS) {
          return updatedHearts.slice(-MAX_HEARTS)
        }
        return updatedHearts
      })
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isActiveRef.current = false
        setHearts([])
      } else {
        isActiveRef.current = true
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    animationRef.current = window.setInterval(createHeart, 300)

    return () => {
      if (animationRef.current) {
        window.clearInterval(animationRef.current)
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <div className={styles.heartsContainer}>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className={styles.heart}
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  )
} 