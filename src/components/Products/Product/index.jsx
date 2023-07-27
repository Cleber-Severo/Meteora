import React from 'react'
import styles from './Product.module.css'

export const Product = ({ path, title, pricing, description, screen }) => {
    return (
        <article className={`${styles[screen]} ${styles.product}`}>
            <img src={path} alt="" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <h3>R$ {pricing}</h3>
                <button>Ver mais</button>
            </div>
        </article>
    )
}
