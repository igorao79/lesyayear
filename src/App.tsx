import { useState, useEffect, useRef } from 'react'
import { FirstPage } from './components/FirstPage/FirstPage'
import { StoryBlock } from './components/StoryBlock/StoryBlock'
import { FinalPage } from './components/FinalPage/FinalPage'
import { HeartsAnimation } from './components/utils/HeartsAnimation/HeartsAnimation'
import { PageTransition } from './components/utils/PageTransition/PageTransition'
import styles from './App.module.scss'

const secondPageItems = [
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

const thirdPageItems = [
  {
    text: 'Впервые побывали в столице',
    image: {
      avif: '/lesyayear/images/us/travel.avif',
      webp: '/lesyayear/images/us/travel.webp',
      jpg: '/lesyayear/images/us/travel.jpg'
    }
  },
  {
    text: 'Почувствовали морской бриз',
    image: {
      avif: '/lesyayear/images/us/support.avif',
      webp: '/lesyayear/images/us/support.webp',
      jpg: '/lesyayear/images/us/support.jpg'
    }
  }
]

const fourthPageItems = [
  {
    text: 'Это замечательное лето вместе',
    image: {
      avif: '/lesyayear/images/us/summer.avif',
      webp: '/lesyayear/images/us/summer.webp',
      jpg: '/lesyayear/images/us/summer.jpg'
    }
  },
  {
    text: 'И с каждым днем ты становишься все прекраснее',
    image: {
      avif: '/lesyayear/images/us/computer.avif',
      webp: '/lesyayear/images/us/computer.webp',
      jpg: '/lesyayear/images/us/computer.jpg'
    }
  }
]

function App() {
  const [showText, setShowText] = useState(false)
  const [showNumber, setShowNumber] = useState(false)
  const [number, setNumber] = useState(0)
  const [showYear, setShowYear] = useState(false)
  const [showArrow, setShowArrow] = useState(false)
  const [showStory, setShowStory] = useState(false)
  const [showThirdPage, setShowThirdPage] = useState(false)
  const [showFourthPage, setShowFourthPage] = useState(false)
  const [showFinalPage, setShowFinalPage] = useState(false)
  const [showTransition, setShowTransition] = useState(false)
  const [isResetting, setIsResetting] = useState(false)
  const [isTransitionVisible, setIsTransitionVisible] = useState(false)
  const [startStoryAnimation, setStartStoryAnimation] = useState(false)
  const [startThirdPageAnimation, setStartThirdPageAnimation] = useState(false)
  const [startFourthPageAnimation, setStartFourthPageAnimation] = useState(false)
  const firstPageRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const thirdPageRef = useRef<HTMLDivElement>(null)
  const fourthPageRef = useRef<HTMLDivElement>(null)
  const finalPageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isResetting) {
      setIsResetting(false)
      return
    }

    console.log('Effect started')
    
    const textTimer = setTimeout(() => {
      console.log('Showing text')
      setShowText(true)
    }, 1000)

    const numberTimer = setTimeout(() => {
      console.log('Showing number')
      setShowNumber(true)
    }, 2000)

    let numberInterval: number
    let startTime: number
    const duration = 2500 
    const numbers = Array.from({ length: 50 }, () => Math.floor(Math.random() * 99) + 1)
    let currentIndex = 0

    if (showNumber) {
      startTime = Date.now()
      numberInterval = window.setInterval(() => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        if (progress >= 1) {
          window.clearInterval(numberInterval)
          setNumber(1)
          setTimeout(() => {
            setShowYear(true)
          }, 500)
          return
        }

        setNumber(numbers[currentIndex])
        currentIndex = (currentIndex + 1) % numbers.length
      }, 100)
    }

    const arrowTimer = setTimeout(() => {
      console.log('Showing arrow')
      setShowArrow(true)
    }, 4500)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(numberTimer)
      clearTimeout(arrowTimer)
      window.clearInterval(numberInterval)
    }
  }, [showNumber, isResetting])

  useEffect(() => {
    document.body.style.overflow = 'auto'
  }, [])

  const handleTransitionEnd = () => {
    setShowTransition(false)
    setIsTransitionVisible(false)
    if (showStory) setStartStoryAnimation(true)
    if (showThirdPage) setStartThirdPageAnimation(true)
    if (showFourthPage) setStartFourthPageAnimation(true)
  }

  const handleScrollStart = () => {
    setIsTransitionVisible(true)
  }

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, setShowState: (value: boolean) => void) => {
    setShowTransition(true)
    setShowState(true)
    setStartStoryAnimation(false)
    setStartThirdPageAnimation(false)
    setStartFourthPageAnimation(false)
    
    setTimeout(() => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, 500)
  }

  const scrollDown = () => {
    console.log('Scroll clicked')
    scrollToSection(storyRef, setShowStory)
  }

  const scrollToThirdPage = () => {
    scrollToSection(thirdPageRef, setShowThirdPage)
  }

  const scrollToFourthPage = () => {
    scrollToSection(fourthPageRef, setShowFourthPage)
  }

  const scrollToFinalPage = () => {
    scrollToSection(finalPageRef, setShowFinalPage)
  }

  const scrollToTop = () => {
    // Сначала скрываем все блоки
    setShowStory(false)
    setShowThirdPage(false)
    setShowFourthPage(false)
    setShowFinalPage(false)
    
    // Сбрасываем состояния первой страницы
    setShowText(false)
    setShowNumber(false)
    setNumber(0)
    setShowYear(false)
    setShowArrow(false)
    
    // Сбрасываем состояния анимации
    setStartStoryAnimation(false)
    setStartThirdPageAnimation(false)
    setStartFourthPageAnimation(false)
    
    // Показываем анимацию перехода
    setShowTransition(true)
    setIsTransitionVisible(true)
    
    // После анимации скроллим наверх
    setTimeout(() => {
      if (firstPageRef.current) {
        firstPageRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, 500)
  }

  return (
    <div className={styles.container}>
      <HeartsAnimation />
      {showTransition && (
        <PageTransition 
          onTransitionEnd={handleTransitionEnd}
          onScrollStart={handleScrollStart}
          isVisible={isTransitionVisible}
          direction={showFinalPage ? 'up' : 'down'}
        />
      )}
      <div className={styles.section} ref={firstPageRef}>
        <FirstPage
          showText={showText}
          showNumber={showNumber}
          number={number}
          showYear={showYear}
          showArrow={showArrow}
          onScrollClick={scrollDown}
          pageRef={firstPageRef}
        />
      </div>
      {showStory && (
        <div className={styles.section} ref={storyRef}>
          <StoryBlock
            title="За это время мы смогли ..."
            items={secondPageItems}
            onScrollClick={scrollToThirdPage}
            backgroundImage="/lesyayear/images/back/page2.jpg"
            startAnimation={startStoryAnimation}
          />
        </div>
      )}
      {showThirdPage && (
        <div className={styles.section} ref={thirdPageRef}>
          <StoryBlock
            title="А также мы ..."
            items={thirdPageItems}
            onScrollClick={scrollToFourthPage}
            backgroundImage="/lesyayear/images/back/page3.jpg"
            startAnimation={startThirdPageAnimation}
          />
        </div>
      )}
      {showFourthPage && (
        <div className={styles.section} ref={fourthPageRef}>
          <StoryBlock
            title="Мы провели ..."
            items={fourthPageItems}
            onScrollClick={scrollToFinalPage}
            backgroundImage="/lesyayear/images/back/page4.jpg"
            startAnimation={startFourthPageAnimation}
          />
        </div>
      )}
      {showFinalPage && (
        <div className={styles.section} ref={finalPageRef}>
          <FinalPage onScrollToTop={scrollToTop} />
        </div>
      )}
    </div>
  )
}

export default App 