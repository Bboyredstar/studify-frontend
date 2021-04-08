import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AssideImage } from '../../components'
import { emailValidation, passwordValidation } from '../../utils/authValidation'
import styles from './SignIn.module.css'
import { setLogin } from '../../store/action'
import image from '../../assets/SignIn.jpg'

export const SignIn = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({ email: '', password: '' })
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPaswordError] = useState('')
  const [authError, setAuthError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const onSubmitHandler = e => {
    e.preventDefault()

    if (passwordValidation(form.password) && emailValidation(form.email)) {
      setIsLoading(true)
      setPaswordError('')
      setEmailError('')
      dispatch(setLogin(form, history, setAuthError, setIsLoading))
      return
    }
    passwordValidation(form.password)
      ? setPaswordError('')
      : setPaswordError('Пароль должен содержать 6 символов')

    emailValidation(form.email)
      ? setEmailError('')
      : setEmailError('Некорректный email')
  }

  const onChangeHandler = e => {
    setForm({ ...form, [e.target.id]: e.target.value.trim() })
  }

  return (
    <div className={styles.wrapper}>
      <Container fluid>
        <Row xs={1} md={1} lg={2} noGutters={true}>
          <Col>
            <AssideImage image={image} blur={true} child={null} />
          </Col>
          <Col>
            <Form
              validated={false}
              className={styles.form}
              onSubmit={e => onSubmitHandler(e)}
            >
              <h3 className={styles.formTitle}>Вход</h3>
              {authError && <span className={styles.alert}>{authError}</span>}
              <Form.Group>
                <Form.Label className={styles.label}>Email</Form.Label>
                <Form.Control
                  type='email'
                  id='email'
                  isInvalid={Boolean(emailError)}
                  onChange={e => onChangeHandler(e)}
                  placeholder='Email'
                  className={styles.formInput}
                />
                <span className={styles.alert}>{emailError}</span>
              </Form.Group>

              <Form.Group>
                <Form.Label className={styles.label}>Пароль</Form.Label>
                <Form.Control
                  type='password'
                  id='password'
                  placeholder='Пароль'
                  isInvalid={Boolean(passwordError)}
                  onChange={e => onChangeHandler(e)}
                  className={styles.formInput}
                />
                <span className={styles.alert}>{passwordError}</span>
              </Form.Group>
              <Button
                variant='primary'
                type='submit'
                className={styles.button}
                disabled={isLoading}
              >
                Войти
              </Button>

              <p className={styles.formRegisterLink}>
                Нет аккаунта?{' '}
                <NavLink to={'/api/register'} className={styles.registerLink}>
                  Зарегистрироваться!
                </NavLink>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
