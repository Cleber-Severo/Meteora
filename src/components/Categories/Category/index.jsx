import React from 'react'
import styles from './Category.module.css'

export const Category = ({screen , title, path }) => {
    return (
            <li className={`${styles[screen]} ${styles.category}`}>
                <img src={path} alt="" />
                <h3>{title}</h3>
            </li>
    )
}
