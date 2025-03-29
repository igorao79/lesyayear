import React, { useState, useEffect, useRef } from 'react'
import { FirstPage } from './components/FirstPage/FirstPage'
import { Story } from './components/SecondPage/Story'
import { ThirdPage } from './components/ThirdPage/ThirdPage'
import { FourthPage } from './components/FourthPage/FourthPage'
import styles from './App.module.scss'

function App() {
  const [showText, setShowText] = useState(false)
  const [showNumber, setShowNumber] = useState(false)
  const [number, setNumber] = useState(0)
  const [showYear, setShowYear] = useState(false)
  const [showArrow, setShowArrow] = useState(false)
  const [showStory, setShowStory] = useState(false)
  const [isStoryVisible, setIsStoryVisible] = useState(false)
  const [showThirdPage, setShowThirdPage] = useState(false)
  const [isThirdPageVisible, setIsThirdPageVisible] = useState(false)
  const [showFourthPage, setShowFourthPage] = useState(false)
  const [isFourthPageVisible, setIsFourthPageVisible] = useState(false)
  const firstPageRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const thirdPageRef = useRef<HTMLDivElement>(null)
  const fourthPageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log('Effect started')
    
    // Показываем текст через 1 секунду
    const textTimer = setTimeout(() => {
      console.log('Showing text')
      setShowText(true)
    }, 1000)

    // Показываем число через 2 секунды
    const numberTimer = setTimeout(() => {
      console.log('Showing number')
      setShowNumber(true)
    }, 2000)

    // Анимируем число
    let numberInterval: number
    let startTime: number
    const duration = 4000 // 4 секунды
    const numbers = Array.from({ length: 50 }, () => Math.floor(Math.random() * 99) + 1) // Генерируем 50 случайных чисел
    let currentIndex = 0

    if (showNumber) {
      startTime = Date.now()
      numberInterval = window.setInterval(() => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        if (progress >= 1) {
          window.clearInterval(numberInterval)
          setNumber(1)
          // Показываем слово "год" после завершения анимации чисел
          setTimeout(() => {
            setShowYear(true)
          }, 500)
          return
        }

        // Показываем следующее число из массива
        setNumber(numbers[currentIndex])
        currentIndex = (currentIndex + 1) % numbers.length
      }, 100) // Обновляем каждые 100мс
    }

    // Показываем стрелку через 7 секунд
    const arrowTimer = setTimeout(() => {
      console.log('Showing arrow')
      setShowArrow(true)
    }, 6500)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(numberTimer)
      clearTimeout(arrowTimer)
      window.clearInterval(numberInterval)
    }
  }, [showNumber])

  const scrollDown = () => {
    console.log('Scroll clicked')
    setShowStory(true)
    document.body.style.overflow = 'auto'
    
    // Даем время на рендер Story компонента
    setTimeout(() => {
      if (storyRef.current) {
        storyRef.current.scrollIntoView({ behavior: 'smooth' })
        setIsStoryVisible(true)
      }
    }, 100)
  }

  const scrollToThirdPage = () => {
    setShowThirdPage(true)
    
    // Даем время на рендер ThirdPage компонента
    setTimeout(() => {
      if (thirdPageRef.current) {
        thirdPageRef.current.scrollIntoView({ behavior: 'smooth' })
        setIsThirdPageVisible(true)
      }
    }, 100)
  }

  const scrollToFourthPage = () => {
    setShowFourthPage(true)
    
    // Даем время на рендер FourthPage компонента
    setTimeout(() => {
      if (fourthPageRef.current) {
        fourthPageRef.current.scrollIntoView({ behavior: 'smooth' })
        setIsFourthPageVisible(true)
      }
    }, 100)
  }

  return (
    <div className={styles.app}>
      <FirstPage
        showText={showText}
        showNumber={showNumber}
        number={number}
        showYear={showYear}
        showArrow={showArrow}
        onScrollClick={scrollDown}
        pageRef={firstPageRef}
      />
      <div 
        ref={storyRef} 
        className={`${styles.storyContainer} ${isStoryVisible ? styles.visible : ''}`}
      >
        {showStory && <Story onScrollClick={scrollToThirdPage} />}
      </div>
      <div 
        ref={thirdPageRef} 
        className={`${styles.storyContainer} ${isThirdPageVisible ? styles.visible : ''}`}
      >
        {showThirdPage && <ThirdPage onScrollClick={scrollToFourthPage} />}
      </div>
      <div 
        ref={fourthPageRef} 
        className={`${styles.storyContainer} ${isFourthPageVisible ? styles.visible : ''}`}
      >
        {showFourthPage && <FourthPage />}
      </div>
    </div>
  )
}

export default App 