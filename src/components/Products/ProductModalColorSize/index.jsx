import React from 'react'
import styles from './ProductModalColorSize.module.css'

const ProductModalColorSize = ({ setColorValue, setSizeValue }) => {

  return (
    <div className={styles.formContainer}>
      <div className={styles.radioContainer}>
        <h3>Cores:</h3>
        <div>
          <div>
            <input type="radio" name='colorName' id='lightblue' value='lightBlue' onChange={(e) => {setColorValue(e.target.value)}} />
            <label htmlFor="lightblue">Azul Claro</label>
          </div>
          <div>
            <input type="radio" name='colorName' id='offWhite' value='offWhite' onChange={(e) => {setColorValue(e.target.value)}} />
            <label htmlFor="offWhite">Offwhite</label>
          </div>
          <div>
            <input type="radio" name='colorName' id='black' value='black' onChange={(e) => {setColorValue(e.target.value)}} />
            <label htmlFor="black">Preto</label>
          </div>
        </div>
      </div>
      <div className={styles.radioContainer}>
        <h3>Tamanhos:</h3>
        <div>
          <div>
            <input type="radio" name='sizesName' id='ppSize' value='pp' onChange={(e) => {setSizeValue(e.target.value)}} />
            <label htmlFor="ppSize">PP</label>
          </div>

          <div>
            <input type="radio" name='sizesName' id='pSize' value='p' onChange={(e) => {setSizeValue(e.target.value)}} />
            <label htmlFor="pSize">P</label>
          </div>
          <div>
            <input type="radio" name='sizesName' id='mSize' value='m' onChange={(e) => {setSizeValue(e.target.value)}} />
            <label htmlFor="mSize">M</label>
          </div>
          <div>
            <input type="radio" name='sizesName' id='gSize' value='g' onChange={(e) => {setSizeValue(e.target.value)}} />
            <label htmlFor="gSize">G</label>
          </div>
          <div>
            <input type="radio" name='sizesName' id='ggSize' value='gg' onChange={(e) => {setSizeValue(e.target.value)}} />
            <label htmlFor="ggSize">GG</label>
          </div>
        </div>
      </div >
    </div >
  )
}

export default ProductModalColorSize