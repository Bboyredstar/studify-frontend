import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './LabelTextRow.module.css'

export const LabelTextRow = ({ label, text, className }) => {
  return (
    <div className={cn(styles.wrapper, styles[className])}>
      <span className={cn(styles.label, 'text-muted')}>{label}:</span>
      <span className={styles.text}>{text || '-'}</span>
    </div>
  )
}

LabelTextRow.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
}
