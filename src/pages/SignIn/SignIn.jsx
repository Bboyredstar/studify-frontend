import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import { FcGoogle } from 'react-icons/fc'
import { AssideImage } from '../../components'
import styles from './SignIn.module.css'
import { auth, setLogin } from '../../store/action'
import image from '../../assets/SignIn.jpg'

export const SignIn = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const googleSuccess = async res => {
    const profile = res?.profileObj
    const token = res?.tokenId
    try {
      dispatch(auth({ profile, token }))
      history.push('/')
    } catch (err) {}
  }
  const googleFailure = err => {
    console.log('message: ' + JSON.stringify(err))
  }

  const [form, setForm] = useState({ email: '', password: '' })
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPaswordError] = useState('')
  const [authError, setAuthError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
    return () => {
      setEmailError('')
      setPaswordError('')
      setIsLoading(false)
      setAuthError('')
    }
  }, [])

  const emailValidation = () => {
    const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regexp.test(form.email)
  }

  const passwordValidation = () => {
    return !(form.password.length < 6)
  }

  const onSubmitHandler = e => {
    e.preventDefault()

    if (passwordValidation() && emailValidation()) {
      setIsLoading(true)
      setPaswordError('')
      setEmailError('')
      dispatch(setLogin(form, history, setAuthError, setIsLoading))
      return
    }
    passwordValidation()
      ? setPaswordError('')
      : setPaswordError('Пароль должен содержать 6 символов')

    emailValidation() ? setEmailError('') : setEmailError('Некорректный email')
  }

  const onChangeHandler = e => {
    setForm({ ...form, [e.target.id]: e.target.value })
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
              <span className={styles.formGoogleLink}>
                Войти с помощью
                <GoogleLogin
                  clientId='19490497198-lrum5ne9g16h3cd9tc5po24ifv7kmef0.apps.googleusercontent.com'
                  render={renderProps => (
                    <FcGoogle
                      className={styles.googleLink}
                      onClick={renderProps.onClick}
                    />
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy='single_host_origin'
                />
              </span>
              <Form.Group>
                <Form.Label>Email</Form.Label>
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
                <Form.Label>Пароль</Form.Label>
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
