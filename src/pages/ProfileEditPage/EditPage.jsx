import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FileBase } from '../../components/FileBase64'
import { Form, Button, Container, Col, Row, Tabs, Tab } from 'react-bootstrap'
import { Preloader } from '../../components'
import blank from '../../assets/profileBlank.png'
import cn from 'classnames'
import styles from './EditPage.module.css'

export const ProfileEditPage = () => {
  const { profile } = useSelector(state => state.auth)
  const [editProfile, setEditProfile] = useState(profile)
  const [profileImg, setProfileImg] = useState(blank)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const onSubmitHandler = e => {
    e.preventDefault()
    console.log(editProfile)
  }

  const onChangeHandler = e => {
    e.preventDefault()
    setEditProfile({ ...editProfile, [e.target.id]: e.target.value })
  }
  const getProfilePhoto = base64 => {
    setProfileImg(base64.base64)
  }

  return (
    <Container className={cn('h-100', 'pt-2', 'pb-2')}>
      {isLoading && <Preloader />}

      <Row>
        <span className={styles.title}>Редактирование профиля</span>
      </Row>
      <Row className={cn('pt-2', 'pb-2')}>
        <Col>
          <Tabs
            defaultActiveKey='profile'
            className={cn('border-success', styles.tabs, 'mt-2')}
          >
            <Tab eventKey='profile' title='Пофиль'>
              <section className={'mt-4'}>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label className={styles.formLabel}>Имя</Form.Label>
                      <Form.Control
                        id='fname'
                        type='text'
                        placeholder='Введите имя'
                        defaultValue={profile.fname}
                        className={styles.formInput}
                      />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label className={styles.formLabel}>
                        Фамилия
                      </Form.Label>
                      <Form.Control
                        id='lname'
                        type='text'
                        placeholder='Введите фамилию'
                        defaultValue={profile.lname}
                        className={styles.formInput}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md={4}>
                      <Form.Label className={styles.formLabel}>Язык</Form.Label>
                      <Form.Control
                        as='select'
                        id='language'
                        onChange={e => onChangeHandler(e)}
                        defaultValue={profile.language}
                        placeholder={'язык'}
                        className={styles.formInput}
                      >
                        <option value={'ru-Ru'}>Русский</option>
                        <option value={'en-Us'}>Английский</option>
                        <option value={'cs-CZ'}>Чешский</option>
                        <option value={'de-DE'}>Немецкий </option>
                        <option value={'it-IT'}>Итальянский</option>
                        <option value={'fr-FR'}>Французский</option>
                      </Form.Control>
                    </Form.Group>
                    {profile.role === 'teacher' && (
                      <Form.Group as={Col}>
                        <Form.Label className={styles.formLabel}>
                          Компетенция
                        </Form.Label>
                        <Form.Control
                          id='competence'
                          type='text'
                          onChange={e => onChangeHandler(e)}
                          placeholder='Основная компетенция'
                          defaultValue={profile.competence}
                          className={styles.formInput}
                        />
                      </Form.Group>
                    )}
                  </Form.Row>
                  <Form.Group>
                    <Form.Label className={styles.formLabel}>О себе</Form.Label>
                    <Form.Control
                      id='summary'
                      as='textarea'
                      rows={5}
                      onChange={e => onChangeHandler(e)}
                      placeholder='Расскажите о себе'
                      defaultValue={profile.summary}
                      isInvalid={editProfile.summary.length > 450}
                      className={styles.formInput}
                    />
                    {editProfile.summary.length > 450 && (
                      <span className={styles.alert}>
                        Максимально допустимое число символов 450
                      </span>
                    )}
                  </Form.Group>
                  <Button
                    className={styles.button}
                    onClick={e => onSubmitHandler(e)}
                  >
                    Потвердить
                  </Button>
                </Form>
              </section>
            </Tab>
            <Tab eventKey='photo' title='Фотография'>
              <Row className={'mt-4'}>
                <Col md={6} className={styles.col}>
                  <img
                    src={profileImg}
                    alt='profile'
                    className={styles.profileImg}
                  />
                </Col>
                <Col md={6} className={styles.col}>
                  <FileBase
                    multiple={false}
                    accept={'.jpg, .jpeg, .png'}
                    callback={getProfilePhoto}
                    className={styles.inputFile}
                    size={'1.5rem'}
                  />
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}
