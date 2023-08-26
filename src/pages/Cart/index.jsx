import React from 'react'
import styles from './Cart.module.css'
import CartItem from '../../components/CartItem';
import { useCartContext } from '../../context/Cart';
import MeteoraBtn from '/src/components/MeteoraBtn'


const Cart = () => {
  const { cart, qtdProducts, totalValueCart } = useCartContext();

  return (
    <section className={styles.cart}>
      <div className={styles.cartHeader}>
        <h2>
          Carrinho: {qtdProducts} {qtdProducts === 1 ? 'item' : 'itens'}
        </h2>
        <MeteoraBtn>
          <button>Continuar comprando</button>
        </MeteoraBtn>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.contentItem}>
            {cart.map(item => <CartItem key={item.cartItemId} {...item} />)}
          </div>
        </div>
      </div>
      
      <div className={styles.cartFooter}>
        <div className={styles.total}>
          <b>Total:</b> R$ {totalValueCart.toFixed(2)}
        </div>
        <MeteoraBtn>
          <button>Finalizar compra</button>
        </MeteoraBtn>
      </div>
    </section>
  )
}

export default Cart