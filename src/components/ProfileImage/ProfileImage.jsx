import React from 'react'
import styles from './ProfileImage.module.css'
import cn from 'classnames'
import { useSelector } from 'react-redux'
import { getInitials } from '../../utils/getInitials'

export const ProfileImage = () => {
  const { profile } = useSelector(state => state.auth)
  return (
    <div className={styles.wrapper}>
      {profile.image ? (
        <img
          src={profile.image}
          alt={profile.name}
          className={cn(styles.image, 'rounded-circle')}
        />
      ) : (
        <span className={cn(styles.tag, 'rounded-circle')}>
          {getInitials(profile.fname, profile.lname)}
        </span>
      )}
    </div>
  )
}
