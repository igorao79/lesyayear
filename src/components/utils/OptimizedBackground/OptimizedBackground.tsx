import React, { useEffect, useState } from 'react'
import styles from './OptimizedBackground.module.scss'

interface OptimizedBackgroundProps {
  image: {
    avif: string
    webp: string
    jpg: string
  }
}

export const OptimizedBackground: React.FC<OptimizedBackgroundProps> = ({ image }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [bestImage, setBestImage] = useState('')

  useEffect(() => {
    const checkSupport = async () => {
      // Проверяем поддержку AVIF
      try {
        await fetch(image.avif, { method: 'HEAD' })
        setBestImage(image.avif)
      } catch {
        try {
          // Если AVIF не поддерживается, пробуем WebP
          await fetch(image.webp, { method: 'HEAD' })
          setBestImage(image.webp)
        } catch {
          // Если ничего не поддерживается, используем JPG
          setBestImage(image.jpg)
        }
      }
    }

    checkSupport()
  }, [image])

  useEffect(() => {
    if (bestImage) {
      const img = new Image()
      img.onload = () => setIsLoaded(true)
      img.src = bestImage
    }
  }, [bestImage])

  return (
    <>
      {bestImage && (
        <img 
          src={bestImage}
          className={`${styles.background} ${isLoaded ? styles.loaded : ''}`} 
          alt=""
        />
      )}
      <div className={styles.overlay} />
    </>
  )
} 