import React from 'react'
import styles from './Categories.module.css'
import categoryData from '/src/data/categories.json'
import { Category } from './Category';

export const Categories = () => {
    console.log(categoryData);
    return (
        <section className={styles.categoryContainer}>
            <h2>Busque por categoria: </h2>

            <ul className={styles.categoryList}>
                {
                    categoryData.map(item => {
                        return <li className={`${styles[item.screen]} ${styles.category}`} key={item.id}>
                            <img src={item.path} alt="" />
                            <h3>{item.title}</h3>
                        </li>
                    })
                }
            </ul>
        </section>
    )
}
