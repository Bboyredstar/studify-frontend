import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Row } from 'react-bootstrap'
import cn from 'classnames'
import styles from './NavBar.module.css'

export const NavBar = () => {
  const { isAuth } = useSelector(state => state.app)
  return (
    <header>
      <Navbar bg='primary' expand='false' as='nav'>
        <Container>
          <Row>
            <NavLink to='/' className={styles.logo}>
              Studify
            </NavLink>
            {!isAuth && (
              <div className={styles.aithLinksWrapper}>
                <NavLink to={'/api/register'} className={styles.link}>
                  Регистрация
                </NavLink>
                <NavLink to={'/api/login'} className={styles.link}>
                  Вход
                </NavLink>
              </div>
            )}
          </Row>
        </Container>
      </Navbar>
    </header>
  )
}
