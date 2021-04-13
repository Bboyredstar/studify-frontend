import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosStarOutline, IoIosStar } from 'react-icons/io'
import Rating from 'react-rating'
import cn from 'classnames'
import defaultImage from '../../assets/SignUp.jpg'
import styles from './CourseCard.module.css'

export const CourseCard = props => {
  const { id, courseName, author, avgRating, image, bg, text, border } = props
  return (
    <Link to={{ pathname: `/item/${id}` }} className={styles.link}>
      <Card
        className={cn(styles.cardWrapper, 'rounded-lg')}
        bg={bg || 'light'}
        text={text || 'primary'}
        border={border || 'light'}
      >
        <Card.Img
          variant='top'
          src={image || defaultImage}
          className={cn(styles.image, styles.roundedTop)}
        />
        <Card.Body className={styles.cardBody}>
          <Card.Title>{courseName}</Card.Title>
          <Card.Text className={styles.cardText}>
            <span className={styles.ratingText}>{avgRating}</span>
            <Rating
              className={styles.ratingBar}
              readonly={true}
              fractions={2}
              initialRating={avgRating}
              fullSymbol={<IoIosStar className={styles.ratingStar} />}
              emptySymbol={<IoIosStarOutline className={styles.ratingStar} />}
            />
          </Card.Text>
        </Card.Body>
        <Card.Footer className={styles.cardFooter}>
          <span className={styles.footerText}>{author}</span>
        </Card.Footer>
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
