import React, { useState } from 'react'
import styles from './Category.module.css'
import { useFilterContext } from '../../../context/Filter';

export const Category = ({ screen, title, path, category, selected }) => {
    const testImagejson = path;
    const { filterHandler, selectedCategoryHandler } = useFilterContext();

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
