import React from 'react'
import styles from './Cart.module.css'
import CartItem from '../../components/CartItem';
import { useCartContext } from '../../context/Cart';

const Cart = () => {
  const { cart, qtdProducts } = useCartContext();

  return (
    <section className={styles.cart}>
      <h2>
        Carrinho: {qtdProducts} {qtdProducts === 1 ? 'item' : 'itens'}
      </h2>
      <div className={styles.content}>
        {cart.map(item => <CartItem key={item.cartItemId} {...item} /> ) }
      </div>
      <div>
        <button>Finalizar compra</button>
        <button>Continuar comprando</button>
      </div>
    </section>
  )
}

export default Cart