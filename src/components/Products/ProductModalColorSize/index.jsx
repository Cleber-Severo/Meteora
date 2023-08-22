import React from 'react'
import styles from './ProductModalColorSize.module.css'

const ProductModalColorSize = ({ setColor, setSize, productFormErr }) => {

  return (
    <div className={styles.formContainer}>
      <div className={styles.radioContainer}>
        <h3>Cores:</h3>
        <div>
          <div>
            <input type="radio" name='colorName' id='lightblue' value='lightBlue' onChange={(e) => {setColor(e.target.value)}} />
            <label htmlFor="lightblue">Azul Claro</label>
          </div>
          <div>
            <input type="radio" name='colorName' id='offWhite' value='offWhite' onChange={(e) => {setColor(e.target.value)}} />
            <label htmlFor="offWhite">Offwhite</label>
          </div>
          <div>
            <input type="radio" name='colorName' id='black' value='black' onChange={(e) => {setColor(e.target.value)}} />
            <label htmlFor="black">Preto</label>
          </div>
        </div>
      </div>
      <div className={styles.radioContainer}>
        <h3>Tamanhos:</h3>
        <div>
          <div>
            <input type="radio" name='sizesName' id='ppSize' value='PP' onChange={(e) => {setSize(e.target.value)}} />
            <label htmlFor="ppSize">PP</label>
          </div>

          <div>
            <input type="radio" name='sizesName' id='pSize' value='P' onChange={(e) => {setSize(e.target.value)}} />
            <label htmlFor="pSize">P</label>
          </div>
          <div>
            <input type="radio" name='sizesName' id='mSize' value='M' onChange={(e) => {setSize(e.target.value)}} />
            <label htmlFor="mSize">M</label>
          </div>
          <div>
            <input type="radio" name='sizesName' id='gSize' value='G' onChange={(e) => {setSize(e.target.value)}} />
            <label htmlFor="gSize">G</label>
          </div>
          <div>
            <input type="radio" name='sizesName' id='ggSize' value='GG' onChange={(e) => {setSize(e.target.value)}} />
            <label htmlFor="ggSize">GG</label>
          </div>
        </div>
      </div >
      <span className={styles[productFormErr]}>**preencha cor e tamanho</span>
    </div >
  )
}

export default ProductModalColorSize