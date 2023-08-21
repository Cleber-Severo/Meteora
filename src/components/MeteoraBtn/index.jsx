import React from 'react'
import styles from './MeteoraBtn.module.css'

const MeteoraBtn = ({ text, handleClickOpen, isCart, addCart }) => {
  return (
      <button 
        className={styles.btn} 
        onClick={() => {
                handleClickOpen ?  handleClickOpen() : console.log('false');
                isCart ? addCart() : console.log('not cart');; 
      }}>{text}</button>
  )
}

export default MeteoraBtn