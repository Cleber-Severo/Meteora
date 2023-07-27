import React from 'react'
import styles from './Category.module.css'
import testImage from './Categoria-camiseta.png'

export const Category = ({ screen, title, path }) => {
    return (
        <li className={`${styles[screen]} ${styles.category}`}>
            <img src={testImage} alt="" />
            <h3>{title}</h3>
        </li>
    )
}
