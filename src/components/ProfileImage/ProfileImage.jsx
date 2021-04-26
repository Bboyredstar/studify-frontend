import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { getInitials } from '../../utils/getInitials'
import styles from './ProfileImage.module.css'

export const ProfileImage = ({ profile, size, rounded, className }) => {
  return (
    <>
      {profile ? (
        <div className={cn(styles.wrapper, className)}>
          {profile.image ? (
            <img
              src={profile.image}
              alt={profile.name}
              className={cn(styles.container, styles[size], styles.image, {
                'rounded-circle': rounded,
              })}
            />
          ) : (
            <span
              className={cn(styles.container, styles[size], styles.tag, {
                'rounded-circle': rounded,
              })}
            >
              {getInitials(profile.fname, profile.lname)}
            </span>
          )}
        </div>
      ) : null}
    </>
  )
}

ProfileImage.propTypes = {
  profile: PropTypes.object,
  rounded: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
}
