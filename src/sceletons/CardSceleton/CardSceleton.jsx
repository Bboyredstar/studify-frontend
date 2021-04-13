import React from 'react'
import { Card } from 'react-bootstrap'
import cn from 'classnames'
import styles from './CardSceleton.module.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export const CardSceleton = () => {
  return (
    <Card className={cn(styles.cardWrapper, 'rounded-lg')}>
      <div className={cn(styles.image, 'rounded-lg')}>
        <Skeleton count={1} width={'100%'} height={'100%'} />
      </div>
      <Card.Body>
        <SkeletonTheme color='#202020' highlightColor='#444' width={100}>
          <Skeleton count={1} />
          <Skeleton count={1} />
        </SkeletonTheme>
      </Card.Body>
      <Card.Footer className={styles.cardFooter}>
        <SkeletonTheme color='#202020' highlightColor='#444' width={100}>
          <Skeleton count={1} width={50} />
        </SkeletonTheme>
      </Card.Footer>
    </Card>
  )
}
