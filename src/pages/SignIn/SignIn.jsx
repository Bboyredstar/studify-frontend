import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { GoogleLogin } from 'react-google-login'
import { FcGoogle } from 'react-icons/fc'
import styles from './SignIn.module.css'
import { AssideImage } from '../../components'
import image from '../../assets/SignIn.jpg'

export const SignIn = () => {
  // const clickHandler=()=>{
  //   checkFields()
  // }

  const googleSuccess = async res => {
    console.log(res)
  }
  const googleFailure = err => {
    console.log('maessage: ' + JSON.stringify(err))
  }
  return (
    <div className={styles.wrapper}>
      <Container fluid>
        <Row xs={1} md={1} lg={2} noGutters={true}>
          <Col>
            <AssideImage image={image} blur={true} child={null} />
          </Col>
          <Col>
            <Form validated={false} className={styles.form}>
              <h3 className={styles.formTitle}>Вход</h3>
              <span className={styles.formGoogleLink}>
                Войти с помощью
                <GoogleLogin
                  clientId=''
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
              <Form.Group controlId='formGridEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  className={styles.formInput}
                />
              </Form.Group>

              <Form.Group controlId='formGridPassword'>
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Пароль'
                  className={styles.formInput}
                />
              </Form.Group>
              <Button
                variant='primary'
                type='submit'
                className={styles.button}
                // onClick={clickHandler}
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
