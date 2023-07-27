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
                    categoryData.map(item =>
                        (<Category {...item} key={item.id} />))
                }
            </ul>
        </section>
    )
}
