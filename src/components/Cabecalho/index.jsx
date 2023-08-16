import React, { useState } from 'react'
import styles from './Cabecalho.module.css'
import closeIcon from './marca-cruzada.png'
import toggleIcon from './toggle-icon.png'

function Cabecalho({ filterProductsInput }) {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className={styles.container}>
      <nav className={styles.container__nav}>
        <div className={styles.rightHeader}>
          <div className={styles.logo}></div>
          <ul className={`${styles.list__menu} ${toggleMenu ? styles.opened : styles.closed}`}>
            <li><img src={closeIcon} onClick={() => setToggleMenu(!toggleMenu) } alt="Close menu icon" /></li>
            <li className={styles.item__menu}>Home</li>
            <li className={styles.item__menu}>Nossas Lojas</li>
            <li className={styles.item__menu}>Novidades</li>
            <li className={styles.item__menu}>Promoções</li>
          </ul>

          <img src={toggleIcon} onClick={() => setToggleMenu(!toggleMenu) } alt="toggle menu icon" />

        </div>
        <ul className={styles.list}>
          <li><input className={styles.search} type="text" placeholder='Digite o produto' onChange={(e) => {
            let inputValue = e.target.value;
            let capitalizedInput = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
            
            filterProductsInput(capitalizedInput);
          }} /></li>
          <li><button className={styles.btn}>Buscar</button></li>
          <li><button className={styles.btn__mobile}>Search</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Cabecalho