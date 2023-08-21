import React from 'react'
import styles from './MeteoraBtn.module.css'

const MeteoraBtn = ({ children}) => {
  return (
      <div className={styles.btn} >
        { children }
      </div>
  )
}

export default MeteoraBtn