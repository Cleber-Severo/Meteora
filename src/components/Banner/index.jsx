import React from 'react'
import styles from './Banner.module.css'

import Caroulsel from '../Caroulsel'

export const Banner = () => {
  return (
    <div className={styles.banner} >
      <Caroulsel />
    </div>
  )
}
