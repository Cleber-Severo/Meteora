import React from 'react'
import styles from "./Products.module.css"
import productsData from "/src/data/products.json"
import { Product } from './Product'

export const Products = () => {
  return (
    <section>
          <h2>Produtos que estão bombando!</h2>
          <div>
            {
                productsData.map( product => ( <Product key={product.id} {...product} /> ))
            }
          </div>
    </section>
  )
}
