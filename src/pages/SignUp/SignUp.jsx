import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { setRegistration } from '../../store/action/auth'
import styles from '../SignIn/SignIn.module.css'
import { AssideImage } from '../../components'
import {
  emailValidation,
  passwordValidation,
  nameValidation,
} from '../../utils/authValidation'
import image from '../../assets/SignUp.jpg'

export const SignUp = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  })
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPaswordError] = useState('')
  const [fnameError, setFnameError] = useState('')
  const [lnameError, setLnameError] = useState('')
  const [authError, setAuthError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false)
  }, [])

  const onSubmitHandler = e => {
    e.preventDefault()

    if (
      passwordValidation(form.password) &&
      emailValidation(form.email) &&
      nameValidation(form.fname) &&
      nameValidation(form.lname)
    ) {
      setIsLoading(true)
      setPaswordError('')
      setEmailError('')
      setLnameError('')
      setFnameError('')
      setAuthError('')
      dispatch(setRegistration(form, history, setAuthError, setIsLoading))
      return
    }
    passwordValidation(form.password)
      ? setPaswordError('')
      : setPaswordError('Пароль должен содержать 6 символов')
    emailValidation(form.email)
      ? setEmailError('')
      : setEmailError('Некорректный email')
    nameValidation(form.fname)
      ? setFnameError('')
      : setFnameError('Имя слишком короткое')
    nameValidation(form.lname)
      ? setLnameError('')
      : setLnameError('Фамилия слишком короткая')
  }

  const onChangeHandler = e => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  return (
    <div className={styles.wrapper}>
      <Container fluid>
        <Row xs={1} md={1} lg={2} noGutters={true}>
          <Col>
            <AssideImage
              image={image}
              blur={true}
              child={
                <>
                  <p className={styles.summary}>
                    Станьте частью сообщества{' '}
                    <span className={styles.logo}>Studify</span> Начните
                    развиваться уже сегодня!
                  </p>
                </>
              }
            />
          </Col>
          <Col>
            <Form
              validated={false}
              className={styles.form}
              onSubmit={e => onSubmitHandler(e)}
            >
              <h3 className={styles.formTitle}>Регистрация</h3>
              {authError && <span className={styles.alert}>{authError}</span>}
              <Form.Row>
                <Col>
                  <Form.Label className={styles.label}>Имя</Form.Label>
                  <Form.Control
                    id='fname'
                    placeholder='Имя'
                    onChange={e => onChangeHandler(e)}
                    className={styles.formInput}
                    isInvalid={Boolean(fnameError)}
                  />
                  <span className={styles.alert}>{fnameError}</span>
                </Col>
                <Col>
                  <Form.Label className={styles.label}>Фамилия</Form.Label>
                  <Form.Control
                    id='lname'
                    placeholder='Фамилия'
                    onChange={e => onChangeHandler(e)}
                    className={styles.formInput}
                    isInvalid={Boolean(lnameError)}
                  />
                  <span className={styles.alert}>{lnameError}</span>
                </Col>
              </Form.Row>
              <Form.Group style={{ marginTop: '.5rem' }}>
                <Form.Label className={styles.label}>Email</Form.Label>
                <Form.Control
                  type='email'
                  id='email'
                  placeholder='Email'
                  onChange={e => onChangeHandler(e)}
                  className={styles.formInput}
                  isInvalid={Boolean(emailError)}
                />
                <span className={styles.alert}>{emailError}</span>
              </Form.Group>

              <Form.Group>
                <Form.Label className={styles.label}>Пароль</Form.Label>
                <Form.Control
                  id='password'
                  type='password'
                  placeholder='Пароль'
                  onChange={e => onChangeHandler(e)}
                  className={styles.formInput}
                  isInvalid={Boolean(passwordError)}
                />
                <span className={styles.alert}>{passwordError}</span>
              </Form.Group>
              <Button
                variant='primary'
                type='submit'
                className={styles.button}
                disabled={isLoading}
              >
                Регистрация
              </Button>

              <p className={styles.formRegisterLink}>
                Есть аккаунт?{' '}
                <NavLink to={'/api/login'} className={styles.registerLink}>
                  Войти!
                </NavLink>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
