import React, { useEffect, useState, useRef } from 'react'
import styles from './HeartsAnimation.module.scss'

const MAX_HEARTS = window.innerWidth < 768 ? 8 : 15
const HEARTS = ['❤️', '💖', '💝', '💕', '💗', '💓', '💞', '💘']

interface Heart {
  id: number
  emoji: string
  left: number
  animationDuration: number
  delay: number
  bottom: number
}

export const HeartsAnimation: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([])
  const animationRef = useRef<number>()
  const isActiveRef = useRef(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createHeart = () => {
      if (!isActiveRef.current || !containerRef.current) return
      
      const containerHeight = containerRef.current.offsetHeight
      
      const newHeart: Heart = {
        id: Date.now(),
        emoji: HEARTS[Math.floor(Math.random() * HEARTS.length)],
        left: Math.random() * 100,
        animationDuration: window.innerWidth < 768 ? 4 + Math.random() * 2 : 6 + Math.random() * 3,
        delay: Math.random() * 2,
        bottom: containerHeight
      }

      setHearts(prevHearts => {
        const updatedHearts = [...prevHearts, newHeart]
        return updatedHearts.length > MAX_HEARTS 
          ? updatedHearts.slice(-MAX_HEARTS)
          : updatedHearts
      })
    }

    const handleVisibilityChange = () => {
      isActiveRef.current = !document.hidden
      if (document.hidden) {
        setHearts([])
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    animationRef.current = window.setInterval(createHeart, window.innerWidth < 768 ? 800 : 500)

    return () => {
      if (animationRef.current) {
        window.clearInterval(animationRef.current)
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <div ref={containerRef} className={styles.heartsContainer}>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className={styles.heart}
          style={{
            left: `${heart.left}%`,
            bottom: `${heart.bottom}px`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`,
            willChange: 'transform'
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  )
}