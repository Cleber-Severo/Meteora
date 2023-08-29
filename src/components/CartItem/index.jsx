import React from 'react'
import styles from './CartItem.module.css'
import { useCartContext } from '../../context/Cart';
import { FaRegTrashAlt } from "react-icons/fa";
import MeteoraDeleteIcon from '../MeteoraDeleteIcon';


const CartItem = ({ path, title, pricing, description, screen, cartItemId, quantity, size, color }) => {
  const { addProduct, removeProduct, convertStringToNum } = useCartContext();

  return (
    <article className={styles.cartItem}>
      <img src={path} alt=""></img>
      <div >

        <p>{title}</p>

        <div className={styles.itemDescription}>
          <span className={styles.sizing}>Tamanho: {size}</span>
          <span>
            cor:
            <div className={`${styles[color]}`}>
              <div></div>
            </div>
          </span>
        </div>

        <div className={`${styles.itemDescription} ${styles.itemDescriptionFinal}`}>
          
          <div className={styles.quantity}>
            <span onClick={() => removeProduct(cartItemId)} >-</span>
            <span>{quantity}</span>
            <span onClick={() => { addProduct({ path, title, pricing, description, screen, cartItemId, color, size }) }} >+</span>
          </div>

          <div className={styles.delete}>
            <MeteoraDeleteIcon cartItemId={cartItemId} />
          </div>
          {/* <span>R$ {pricing}</span> */}
          {/* <FaRegTrashAlt
            className={styles.deleteIcon}
            onClick={() => { deleteProduct(cartItemId) }}
          /> */}
        </div>
          <span className={styles.subtotal}>Subtotal: R${(convertStringToNum(pricing) * quantity).toFixed(2)}</span>
      </div>
      
      

    </article>
  )
}

export default CartItem