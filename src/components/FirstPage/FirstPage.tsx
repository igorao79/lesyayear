import React from 'react'
import styles from './FirstPage.module.scss'
import { Title } from './Title/Title'
import { Counter } from './Counter/Counter'
import { ScrollArrow } from '../utils/ScrollArrow/ScrollArrow'

interface FirstPageProps {
  showText: boolean
  showNumber: boolean
  number: number
  showYear: boolean
  showArrow: boolean
  onScrollClick: () => void
  pageRef: React.RefObject<HTMLDivElement>
}

export const FirstPage: React.FC<FirstPageProps> = ({
  showText,
  showNumber,
  number,
  showYear,
  showArrow,
  onScrollClick,
  pageRef
}) => {
  return (
    <div ref={pageRef} className={styles.firstPage}>
      <div className={styles.content}>
        <Title show={showText} />
        <Counter show={showNumber} number={number} showYear={showYear} />
        <ScrollArrow show={showArrow} onClick={onScrollClick} />
      </div>
    </div>
  )
} 