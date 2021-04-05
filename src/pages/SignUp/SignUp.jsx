import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import styles from '../SignIn/SignIn.module.css'
import { AssideImage } from '../../components'
import image from '../../assets/SignUp.jpg'

export const SignUp = () => {
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
            <Form validated={false} className={styles.form}>
              <h3 className={styles.formTitle}>Регистрация</h3>
              <Form.Row>
                <Col>
                  <Form.Label>Имя</Form.Label>
                  <Form.Control placeholder='Имя' />
                </Col>
                <Col>
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control placeholder='Фамилия' />
                </Col>
              </Form.Row>
              <Form.Group
                controlId='formGridEmail'
                style={{ marginTop: '.5rem' }}
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Email'
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
              <Button variant='primary' type='submit' className={styles.button}>
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
