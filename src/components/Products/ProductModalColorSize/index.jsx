import React from 'react'
import styles from './ProductModalColorSize.module.css'

const ProductModalColorSize = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.radioContainer}>
        <h3>Cores:</h3>
        <div>
          <input type="radio" name='colorName' id='lightblue' value='lightBlue'/>
          <label htmlFor="lightblue">Azul Claro</label>

          <input type="radio" name='colorName' id='offWhite' value='offWhite'/>
          <label htmlFor="offWhite">Offwhite</label>
          
          <input type="radio" name='colorName' id='black' value='black'/>
          <label htmlFor="black">Preto</label>
        </div>
      </div>
      <div className={styles.radioContainer}>
        <h3>Tamanhos:</h3>
        <div>
          <input type="radio" name='sizesName' id='ppSize' value='ppSize'/>
          <label htmlFor="ppSize">PP</label>

          <input type="radio" name='sizesName' id='pSize' value='pSize'/>
          <label htmlFor="pSize">P</label>

          <input type="radio" name='sizesName' id='mSize' value='mSize'/>
          <label htmlFor="mSize">M</label>

          <input type="radio" name='sizesName' id='gSize' value='gSize'/>
          <label htmlFor="gSize">G</label>

          <input type="radio" name='sizesName' id='ggSize' value='ggSize'/>
          <label htmlFor="ggSize">GG</label>

         
        </div>
      </div>
    </div>
  )
}

export default ProductModalColorSize