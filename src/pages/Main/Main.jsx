import React from 'react'
import { CardDeck } from 'react-bootstrap'
import { CourseCard } from '../../components'
import image from '../../assets/SignUp.jpg'
import { updateUser } from '../../api/user'

export const Main = () => {
  const update = async () => {
    const response = await updateUser()
    console.log(response)
  }
  return (
    <CardDeck>
      <CourseCard
        id={'123'}
        author={'Test Test'}
        avgRating={4.5}
        courseName={'New Course'}
        image={image}
      />
      <CourseCard
        id={'123'}
        author={'Test Test'}
        avgRating={4.5}
        courseName={'New Course'}
        image={image}
      />
      <CourseCard
        id={'123'}
        author={'Test Test'}
        avgRating={4.5}
        courseName={'New Course'}
        image={image}
      />
      <button onClick={update}>test</button>
    </CardDeck>
  )
}
