import React, { useState, useEffect } from 'react'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { Navbar, Container, Row, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { ProfileImage } from '../../components'
import { getItem } from '../../utils/localStorage'
import { logout } from '../../store/action'
import styles from './NavBar.module.css'

export const NavBar = () => {
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  useEffect(() => {
    setUser(getItem('profile'))
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
                title={user?.name}
                id='basic-nav-dropdown'
                className={styles.dropdown}
              >
                <ProfileImage />
                <NavDropdown.Item className={styles.itemLink}>
                  Профиль
                </NavDropdown.Item>
                {user?.role === 'user' ? (
                  <>
                    <NavDropdown.Item className={styles.itemLink}>
                      Стать преподавателем
                    </NavDropdown.Item>
                  </>
                ) : null}
                {user?.role === 'teacher' ? (
                  <>
                    <NavDropdown.Item className={styles.itemLink}>
                      Панель преподавателя
                    </NavDropdown.Item>
                  </>
                ) : null}
                <NavDropdown.Item
                  className={styles.itemLink}
                ></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={e => logoutHandler(e)}
                  className={styles.itemLink}
                >
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
