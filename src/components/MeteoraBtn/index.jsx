import React from 'react'
import styles from './MeteoraBtn.module.css'

const MeteoraBtn = ({text}) => {
  return (
      <button className={styles.btn}>{text}</button>
  )
}

export default MeteoraBtn