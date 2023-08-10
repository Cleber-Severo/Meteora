import React, { useState } from 'react'
import styles from './Category.module.css'

export const Category = ({ screen, title, path, category, filterHandler}) => {
    const testImagejson = path;
    const [selected, setSelected] = useState(false)


    return (
        <li 
            className={`${styles[screen]} ${styles.category} ${styles[selected]}`} 
            onClick={() => { 
                setSelected(!selected);
                if(selected) {
                    filterHandler(category, true)
                    return
                }
                filterHandler(category) 
            }}
        >
            <img src={testImagejson} alt="" />
            <h3>{title}</h3>
        </li>
    )
}
