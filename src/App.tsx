import React, { useState, useEffect, useRef } from 'react'
import { FirstPage } from './components/FirstPage/FirstPage'
import { Story } from './components/SecondPage/Story'
import { ThirdPage } from './components/ThirdPage/ThirdPage'
import { FourthPage } from './components/FourthPage/FourthPage'
import { HeartsAnimation } from './components/HeartsAnimation/HeartsAnimation'
import { PageTransition } from './components/PageTransition/PageTransition'
import styles from './App.module.scss'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

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
  const [showTransition, setShowTransition] = useState(false)
  const [showScrollToTop, setShowScrollToTop] = useState(false)
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
    const duration = 3000 
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
    }, 5500)

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Показываем стрелку, когда пользователь прокрутил страницу на 70% от высоты
      setShowScrollToTop(scrollPosition > windowHeight * 2 && scrollPosition < documentHeight - windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(textTimer)
      clearTimeout(numberTimer)
      clearTimeout(arrowTimer)
      window.clearInterval(numberInterval)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showNumber])

  const handleTransitionEnd = () => {
    setShowTransition(false)
  }

  const scrollDown = () => {
    console.log('Scroll clicked')
    setShowTransition(true)
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
    setShowTransition(true)
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
    setShowTransition(true)
    setShowFourthPage(true)
    
    // Даем время на рендер FourthPage компонента
    setTimeout(() => {
      if (fourthPageRef.current) {
        fourthPageRef.current.scrollIntoView({ behavior: 'smooth' })
        setIsFourthPageVisible(true)
      }
    }, 100)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Сбрасываем все состояния
    setShowStory(false);
    setShowThirdPage(false);
    setShowFourthPage(false);
    setIsStoryVisible(false);
    setIsThirdPageVisible(false);
    setIsFourthPageVisible(false);
  }

  return (
    <div className={styles.app}>
      <HeartsAnimation />
      {showTransition && <PageTransition onTransitionEnd={handleTransitionEnd} />}
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
        {showFourthPage && <FourthPage onScrollToTop={scrollToTop} />}
      </div>
      {showScrollToTop && <ScrollToTop onClick={scrollToTop} />}
    </div>
  )
}

export default App 