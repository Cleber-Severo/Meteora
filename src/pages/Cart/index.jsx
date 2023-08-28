import React, { useState } from 'react'
import styles from './Cart.module.css'
import CartItem from '../../components/CartItem';
import { useCartContext } from '../../context/Cart';
import MeteoraBtn from '/src/components/MeteoraBtn'
import { Link, useNavigate } from 'react-router-dom';
import { Snackbar } from '@mui/material';


const Cart = () => {
  const { cart, setCart, qtdProducts, totalValueCart } = useCartContext();
  const navigate = useNavigate();

  const [openSnack, setOpenSnack] = useState(false);
  const [vertical, setverical] = React.useState('top');
  const [horizontal, setHorizontal] = useState('center');

  const handleClickOpenSnack = () => {
    setOpenSnack(true);
  };
  const handleCloseSnack = () => {
    setOpenSnack(false);
  };

  function endShopiing() {
    handleClickOpenSnack()
    setCart([])
    setTimeout(() =>{
      navigate(-1)
    }, 2000)
  }

  return (
    <section className={styles.cart}>
      <div className={styles.cartHeader}>
        <h2>
          Carrinho: {qtdProducts} {qtdProducts === 1 ? 'item' : 'itens'}
        </h2>
        <MeteoraBtn>
          <button onClick={() => navigate(-1)} >Continuar comprando</button>
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
          <button 
            onClick={endShopiing} 
          >
            Finalizar compra
          </button>
          </MeteoraBtn>
      </div>

      <Snackbar
        open={openSnack}
        autoHideDuration={1500}
        onClose={handleCloseSnack}
        anchorOrigin={{ vertical, horizontal }}
        message="Compra finallizada!"
       
      />
    </section>
  )
}

export default Cart