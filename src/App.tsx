import { useState, useEffect, useRef } from 'react'
import { FirstPage } from './components/FirstPage/FirstPage'
import { SecondPage } from './components/SecondPage/SecondPage'
import { ThirdPage } from './components/ThirdPage/ThirdPage'
import { FourthPage } from './components/FourthPage/FourthPage'
import { HeartsAnimation } from './components/utils/HeartsAnimation/HeartsAnimation'
import { PageTransition } from './components/utils/PageTransition/PageTransition'


function App() {
  const [showText, setShowText] = useState(false)
  const [showNumber, setShowNumber] = useState(false)
  const [number, setNumber] = useState(0)
  const [showYear, setShowYear] = useState(false)
  const [showArrow, setShowArrow] = useState(false)
  const [showStory, setShowStory] = useState(false)
  const [showThirdPage, setShowThirdPage] = useState(false)
  const [showFourthPage, setShowFourthPage] = useState(false)
  const [showTransition, setShowTransition] = useState(false)
  const [isResetting, setIsResetting] = useState(false)
  const firstPageRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const thirdPageRef = useRef<HTMLDivElement>(null)
  const fourthPageRef = useRef<HTMLDivElement>(null)

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

  const handleTransitionEnd = () => {
    setShowTransition(false)
  }

  const scrollDown = () => {
    console.log('Scroll clicked')
    setShowTransition(true)
    setShowStory(true)
    document.body.style.overflow = 'auto'
    
    setTimeout(() => {
      if (storyRef.current) {
        storyRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const scrollToThirdPage = () => {
    setShowTransition(true)
    setShowThirdPage(true)
    
    setTimeout(() => {
      if (thirdPageRef.current) {
        thirdPageRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const scrollToFourthPage = () => {
    setShowTransition(true)
    setShowFourthPage(true)
    
    setTimeout(() => {
      if (fourthPageRef.current) {
        fourthPageRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const scrollToTop = () => {
    setShowTransition(true)
    setIsResetting(true)
    document.body.style.overflow = 'hidden'
    
    if (firstPageRef.current) {
      firstPageRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    setShowStory(false)
    setShowThirdPage(false)
    setShowFourthPage(false)
    setShowText(false)
    setShowNumber(false)
    setNumber(0)
    setShowYear(false)
    setShowArrow(false)

    setTimeout(() => {
      document.body.style.overflow = 'auto'
    }, 1000)
  }

  return (
    <div>
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
      <div ref={storyRef}>
        {showStory && <SecondPage onScrollClick={scrollToThirdPage} />}
      </div>
      <div ref={thirdPageRef}>
        {showThirdPage && <ThirdPage onScrollClick={scrollToFourthPage} />}
      </div>
      <div ref={fourthPageRef}>
        {showFourthPage && <FourthPage onScrollToTop={scrollToTop} />}
      </div>
    </div>
  )
}

export default App 