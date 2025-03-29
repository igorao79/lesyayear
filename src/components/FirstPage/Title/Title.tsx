import React from 'react'
import styles from './Title.module.scss'

interface TitleProps {
  show: boolean
}

export const Title: React.FC<TitleProps> = ({ show }) => {
  console.log('Title show:', show)
  return (
    <h1 className={`${styles.title} ${show ? styles.show : ''}`}>
      С годовщиной, Леся!
    </h1>
  )
} 