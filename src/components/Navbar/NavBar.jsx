import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar, Container } from 'react-bootstrap'
import cn from 'classnames'
import styles from './NavBar.module.css'

export const NavBar = () => {
  const { isAuth } = useSelector(state => state.app)
  return (
    <header>
      <Navbar bg='primary' expand='false'>
        <Container />
      </Navbar>
    </header>
  )
}
