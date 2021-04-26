import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import {
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Tabs,
  Tab,
} from 'react-bootstrap'
import {
  Section,
  ProfileImage,
  LabelTextRow,
  Preloader,
} from '../../components'
import { getLanguage } from '../../utils/getLanguage'
import styles from './ProfilePage.module.css'

export const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false)
  }, [])
  const { profile } = useSelector(state => state.auth)
  if (isLoading) {
    return <Preloader />
  }
  return (
    <Container className={cn('h-100', 'pt-2', 'pb-2')}>
      <Row>
        <span className={styles.title}>Профиль</span>
      </Row>
      <Row className={cn('pt-2', 'pb-2')}>
        <Col md='auto' className={'mt-4'}>
          <ProfileImage
            profile={profile}
            size={'l'}
            rounded={true}
            className={styles.fluid}
          />
        </Col>
        <Col className={cn('bg-light', 'rounded-sm', 'mt-4')}>
          <section className={styles.infoWrapper}>
            <h4 className={styles.name}>{profile.name}</h4>
            {profile.role === 'teacher' && (
              <span className={styles.role}>Преподаватель</span>
            )}
            <OverlayTrigger
              placement={'bottom'}
              overlay={
                <Tooltip>
                  <span>Редактировать профиль</span>
                </Tooltip>
              }
            >
              <Link to='/edit-profile' className={styles.link}>
                <BiDotsHorizontalRounded className={styles.editButton} />
              </Link>
            </OverlayTrigger>
            <Tabs
              defaultActiveKey='main'
              className={cn('border-success', styles.tabs, 'mt-4')}
            >
              <Tab eventKey='main' title='Информация'>
                <section className={styles.infoWrapper}>
                  <LabelTextRow label='Email' text={profile.email} />
                  <LabelTextRow
                    label='Язык'
                    text={getLanguage(profile.language)}
                  />
                  <LabelTextRow label='Возраст' text={profile.age} />
                  {profile.role === 'teacher' && (
                    <LabelTextRow
                      label='Компетенция'
                      text={profile.competence}
                    />
                  )}
                </section>
              </Tab>
              <Tab eventKey='info' title='О себе'>
                <section className={styles.infoWrapper}>
                  <p className={styles.summary}>
                    {profile.summary || 'Пользователь не заполнил этот раздел.'}
                  </p>
                </section>
              </Tab>
            </Tabs>
          </section>
        </Col>
      </Row>
      <Row className={'mt-4'}>
        <Section title={'Избранные курсы'}>
          {!profile.favorite_courses ? (
            profile.favorite_courses.map(el => <span>1</span>)
          ) : (
            <span className={cn('text-muted', styles.emptyString)}>
              Ваш список избранных курсов пока пуст.
            </span>
          )}
        </Section>
      </Row>
      <Row className={'mt-4'}>
        <Section title={'Мое обучение'}>
          {!profile.favorite_courses ? (
            profile.favorite_courses.map(el => <span>1</span>)
          ) : (
            <span className={cn('text-muted', styles.emptyString)}>
              Ваш список курсов пока пуст.
            </span>
          )}
        </Section>
      </Row>
    </Container>
  )
}
