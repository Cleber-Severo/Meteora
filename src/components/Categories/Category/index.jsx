import React, { useState } from 'react'
import styles from './Category.module.css'

export const Category = ({ screen, title, path, category, selected, filterHandler, selectedCategoryHandler }) => {
    const testImagejson = path;

    return (
        <li 
            className={`${styles[screen]} ${styles.category} ${styles[selected]}`} 
            onClick={() => { 
                filterHandler(category, selected);
                selectedCategoryHandler(title); 
            }}
        >
            <img src={testImagejson} alt="" />
            <h3>{title}</h3>
        </li>
    )
}
