import React from 'react'
import styles from './Category.module.css'

export const Category = ({ screen, title, path, category, filterHandler }) => {
    const testImagejson = path;
    return (
        <li className={`${styles[screen]} ${styles.category}`} onClick={() => { filterHandler(category) }}>
            <img src={testImagejson} alt="" />
            <h3>{title}</h3>
        </li>
    )
}
