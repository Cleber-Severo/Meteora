import React from 'react'
import styles from './Cabecalho.module.css'

function Cabecalho() {
  return (
    <header className={styles.container}>
        <nav className={styles.container__nav}>
        <ul className={styles.list__menu}>
                <li>Meteora</li>
                <li>Home</li>
                <li>Nossas Lojas</li>
                <li>Novidades</li>
                <li>Promoções</li>
            </ul>
            <ul className={styles.list}>
                <li><input className={styles.search} type="text" placeholder='Digite o produto' /></li>
                <li><button className={styles.btn}>Buscar</button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Cabecalho