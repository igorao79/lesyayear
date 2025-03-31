import React, { useEffect, useRef } from 'react'
import styles from './HeartsAnimation.module.scss'

const MAX_HEARTS = window.innerWidth < 768 ? 8 : 15
const HEARTS = ['❤️', '💖', '💝', '💕', '💗', '💓', '💞', '💘']

export const HeartsAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const heartsRef = useRef<Set<number>>(new Set())
  const nextIdRef = useRef(0)
  const isActiveRef = useRef(true)

  useEffect(() => {
    if (!containerRef.current) return

    const createHeart = () => {
      if (!isActiveRef.current || !containerRef.current) return

      const id = nextIdRef.current++
      heartsRef.current.add(id)

      const containerHeight = containerRef.current.offsetHeight
      const heart = document.createElement('div')
      heart.className = styles.heart
      heart.dataset.id = id.toString()

      const emoji = HEARTS[Math.floor(Math.random() * HEARTS.length)]
      const left = Math.random() * 100
      const duration = window.innerWidth < 768 
        ? 4 + Math.random() * 2 
        : 6 + Math.random() * 3
      const delay = Math.random() * 2

      heart.style.left = `${left}%`
      heart.style.bottom = `${containerHeight}px`
      heart.style.animationDuration = `${duration}s`
      heart.style.animationDelay = `${delay}s`
      heart.style.willChange = 'transform'
      heart.textContent = emoji

      heart.addEventListener('animationend', () => {
        heart.remove()
        heartsRef.current.delete(id)
      })

      containerRef.current.appendChild(heart)

      // Ограничение количества сердец
      if (heartsRef.current.size > MAX_HEARTS) {
        const oldestId = Array.from(heartsRef.current)[0]
        const oldestHeart = containerRef.current.querySelector(`[data-id="${oldestId}"]`)
        oldestHeart?.remove()
        heartsRef.current.delete(oldestId)
      }
    }

    const handleVisibilityChange = () => {
      isActiveRef.current = !document.hidden
      if (document.hidden && containerRef.current) {
        containerRef.current.innerHTML = ''
        heartsRef.current.clear()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    const intervalId = setInterval(createHeart, window.innerWidth < 768 ? 800 : 500)

    return () => {
      clearInterval(intervalId)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
      heartsRef.current.clear()
    }
  }, [])

  return <div ref={containerRef} className={styles.heartsContainer} />
}