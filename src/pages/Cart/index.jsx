import React from 'react'
import styles from './Cart.module.css'
import CartItem from '../../components/CartItem';
import { useCartContext } from '../../context/Cart';

const Cart = () => {
  const { cart, qtdProducts, totalValueCart } = useCartContext();

  return (
    <section className={styles.cart}>
      <h2>
        Carrinho: {qtdProducts} {qtdProducts === 1 ? 'item' : 'itens'}
      </h2>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          {cart.map(item => <CartItem key={item.cartItemId} {...item} />)}
        </div>
        <div className={styles.contentItem}>
          Total: R$ {totalValueCart.toFixed(2)}
        </div>
      </div>
      <div>
        <button>Finalizar compra</button>
        <button>Continuar comprando</button>
      </div>
    </section>
  )
}

export default Cart