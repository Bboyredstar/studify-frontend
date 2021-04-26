import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import { CourseCard, Section } from '../../components'
import { CardSceleton } from '../../sceletons'

import styles from './Main.module.css'

export const Main = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false)
  }, [])
  return (
    <div className={cn('container', styles.wrapper)}>
      {isLoading && (
        <Section title={''}>
          {Array(5)
            .fill()
            .map((_, index) => (
              <CardSceleton key={index} />
            ))}
        </Section>
      )}
      {!isLoading && (
        <Section title={'Demo'}>
          <CourseCard
            id={'123'}
            author={'Test Test'}
            avgRating={4.5}
            courseName={'New Course'}
            image={''}
            border={'none'}
          />
          <CourseCard
            id={'123'}
            author={'Test Test'}
            avgRating={4.5}
            courseName={'New Course'}
            image={''}
            border={'none'}
          />
          <CourseCard
            id={'123'}
            author={'Test Test'}
            avgRating={4.9}
            courseName={'New Course'}
            image={''}
            border={'none'}
          />
          <CourseCard
            id={'123'}
            author={'Test Test'}
            avgRating={4.9}
            courseName={'New Course'}
            image={''}
            border={'none'}
          />
          <CourseCard
            id={'123'}
            author={'Test Test'}
            avgRating={4.9}
            courseName={'New Course'}
            image={''}
            border={'none'}
          />
        </Section>
      )}
    </div>
  )
}
