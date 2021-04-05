import React, { useState, useEffect } from 'react'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { Navbar, Container, Row, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/action'
import styles from './NavBar.module.css'

export const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  const logoutHandler = e => {
    e.preventDefault()
    setUser(null)
    dispatch(logout())
    history.push('/')
  }
  return (
    <header>
      <Navbar bg='primary' expand='false' as='nav'>
        <Container>
          <Row className={styles.navContainer}>
            <NavLink to='/' className={styles.logo}>
              Studify
            </NavLink>
            {user ? (
              <NavDropdown
                title={user?.profile.name}
                id='basic-nav-dropdown'
                className={styles.dropdown}
              >
                <NavDropdown.Item
                  href='#action/3.1'
                  className={styles.link}
                ></NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2' className={styles.link}>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3' className={styles.link}>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={e => logoutHandler(e)}>
                  Выйти
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div className={styles.aithLinksWrapper}>
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
