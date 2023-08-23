import React, { useEffect, useState } from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MeteoraBtn from '../MeteoraBtn'

import { ImCross } from "react-icons/im";

import styles from './AsideCart.module.css'
import { Link } from 'react-router-dom';
import AsideItem from './AsideItem';
import { useCartContext } from '../../context/Cart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const AsideCart = () => {
    const [asideToggle, setAsideToggle] = useState(false);
    const { cart, qtdProducts } = useCartContext();
    useEffect( () => { 
        if(qtdProducts == 0) setAsideToggle(false)
     }, [qtdProducts] )

    return (
        <div className={styles.cart} >

            <div className={`${styles.aside} ${asideToggle ? styles.show : styles.hide}`}>
                <div className={styles.wrapper}>

                    <div className={styles.aside_header}>
                        <h2>Resumo do pedido</h2>
                        <ImCross
                            className={styles.closeIcon}
                            onClick={() => { setAsideToggle(!asideToggle) }}
                        />
                    </div>
                    <div className={styles.aside_content}>
                        {
                          
                            cart.map(product => (<AsideItem key={product.cartItemId} {...product} />))
                        }
                    </div>

                    <div className={styles.aside_footer}>
                        <Link to="./cart">
                            <MeteoraBtn>
                                <button>Ir para carrinho</button>
                            </MeteoraBtn>
                        </Link>
                    </div>

                </div>
            </div>

            <div
                className={styles.cartIcon}
            >
                <IconButton
                    aria-label="cart"
                    onClick={() => setAsideToggle(!asideToggle)}
                    disabled={qtdProducts === 0}
                >
                    <StyledBadge badgeContent={qtdProducts} color="secondary" >
                        <ShoppingCartIcon color={qtdProducts > 0 ? "primary" : "danger"} />
                    </StyledBadge>
                </IconButton>

            </div>
        </div>
    )
}

export default AsideCart