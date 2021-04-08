import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import styles from './CourseCard.module.css'

export const CourseCard = props => {
  const { id, courseName, author, avgRating, image, bg, text, border } = props
  return (
    <Link to={{ pathname: `/item/${id}` }}>
      <Card
        className={cn('rounded-lg')}
        bg={bg || 'light'}
        text={text || 'primary'}
        border={border || 'light'}
      >
        <Card.Img
          variant='top'
          src={image}
          className={cn(styles.image, 'rounded-lg')}
        />
        <Card.Body>
          <Card.Title>{courseName}</Card.Title>
          <Card.Text>
            <span>{avgRating}</span>
            <span>★★★★★</span>
            <span>{author}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

CourseCard.propTypes = {
  author: PropTypes.string,
  courseName: PropTypes.string,
  avgRating: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.string,
  bg: PropTypes.string,
  text: PropTypes.string,
  border: PropTypes.string,
}
