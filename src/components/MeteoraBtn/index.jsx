import React from 'react'
import styles from './MeteoraBtn.module.css'

const MeteoraBtn = ({ text, handleClickOpen }) => {
  return (
      <button className={styles.btn} onClick={() => {
      handleClickOpen ?  handleClickOpen() : console.log('false');
      }}>{text}</button>
  )
}

export default MeteoraBtn