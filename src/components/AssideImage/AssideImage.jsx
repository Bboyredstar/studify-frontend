import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './AssideImage.module.css'

export const AssideImage = ({ image, blur, classname, child }) => {
  return (
    <aside
      className={cn(styles.asideWrapper, classname)}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className={cn(styles.childWrapper, { [styles.blured]: blur })}>
        {child}
      </div>
    </aside>
  )
}

AssideImage.propTypes = {
  iamge: PropTypes.string,
  blur: PropTypes.bool,
  classname: PropTypes.string,
  child: PropTypes.node,
}
