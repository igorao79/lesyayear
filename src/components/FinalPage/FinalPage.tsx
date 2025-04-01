import { useEffect, useState, useCallback, memo, useRef } from 'react'
import styles from './FinalPage.module.scss'
import ScrollToTop from '../utils/ScrollToTop/ScrollToTop'
import { OptimizedBackground } from '../utils/OptimizedBackground/OptimizedBackground'

interface FinalPageProps {
  onScrollToTop: () => void
}

const MemoizedText = memo(({ text, show, isLast }: { text: string; show: boolean; isLast: boolean }) => (
  <h2 className={`${styles.text} ${show ? styles.show : ''} ${isLast ? styles.lastText : ''}`}>
    {text}
  </h2>
))

const MemoizedGifs = memo(({ show }: { show: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  // Предзагрузка гифок при монтировании компонента
  useEffect(() => {
    const gifUrls = [
      '/lesyayear/images/kotikleft.gif',
      '/lesyayear/images/kotikright.gif'
    ]

    gifUrls.forEach(url => {
      const img = new Image()
      img.src = url
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={`${styles.gifsContainer} ${show ? styles.show : ''}`}>
      <img 
        src="/lesyayear/images/kotikleft.gif" 
        alt="Love gif 1" 
        className={`${styles.gif} ${isVisible ? styles.visible : ''}`} 
      />
      <img 
        src="/lesyayear/images/kotikright.gif" 
        alt="Love gif 2" 
        className={`${styles.gif} ${isVisible ? styles.visible : ''}`} 
      />
    </div>
  )
})

export const FinalPage = ({ onScrollToTop }: FinalPageProps) => {
  const [showTexts, setShowTexts] = useState<boolean[]>(new Array(3).fill(false))
  const [showGifs, setShowGifs] = useState(false)
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  const handleScrollToTop = useCallback(() => {
    onScrollToTop()
  }, [onScrollToTop])

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
          setTimeout(() => {
            setShowGifs(true)
            // Показываем стрелку после показа гифок
            setTimeout(() => {
              setShowScrollToTop(true)
            }, 1000)
          }, 1000)
        }
      }, 1000 + index * 1500)
    })

    return () => {
      textTimers.forEach(timer => clearTimeout(timer))
      setShowScrollToTop(false)
    }
  }, [])

  return (
    <div className={styles.finalPage}>
      <OptimizedBackground 
        image={{
          avif: '/lesyayear/images/back/finalpage.avif',
          webp: '/lesyayear/images/back/finalpage.webp',
          jpg: '/lesyayear/images/back/finalpage.jpg'
        }}
      />
      <div className={styles.content}>
        <MemoizedText text="Спасибо тебе за все" show={showTexts[0]} isLast={false} />
        <MemoizedText text="Надеюсь, мы будем вместе всегда" show={showTexts[1]} isLast={false} />
        <MemoizedText text="Я очень тебя люблю" show={showTexts[2]} isLast={true} />
        <MemoizedGifs show={showGifs} />
      </div>
      {showScrollToTop && <ScrollToTop onClick={handleScrollToTop} />}
    </div>
  )
} 