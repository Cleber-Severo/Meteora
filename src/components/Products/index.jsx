import React from 'react'
import styles from "./Products.module.css"
import productsData from "/src/data/products.json"
import { Product } from './Product'
import { useFilterContext } from '../../context/Filter'

export const Products = () => {

  const { productList } = useFilterContext();

  return (
    <section className={styles.productsContainer}>
      <h2>Produtos que estão bombando!</h2>
      <div className={styles.products}>
        {
          productList.map(product => (<Product key={product.id} {...product} />))
        }
      </div>
    </section>
  )
}
