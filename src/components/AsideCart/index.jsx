import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MeteoraBtn from '../MeteoraBtn'

import { ImCross } from "react-icons/im";

import styles from './AsideCart.module.css'
import { Link } from 'react-router-dom';
import AsideItem from './AsideItem';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const AsideCart = () => {
    const [asideToggle, setAsideToggle] = useState(false)

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
                        <AsideItem itemQtd={4} itemSize="G" imgUrl={"Images/Desktop/Imagens Cards/Camiseta.png" } />
                        <AsideItem itemQtd={2} itemSize="M" imgUrl={"Images/Desktop/Imagens Cards/Calça.png" } />
                        <AsideItem itemQtd={3} itemSize="P" imgUrl={"Images/Desktop/Imagens Cards/Bolsa.png" } />
                        <AsideItem itemQtd={1} itemSize="G" imgUrl={"Images/Desktop/Imagens Cards/Jaqueta.png" } />
                        <AsideItem itemQtd={2} itemSize="G" imgUrl={"Images/Desktop/Imagens Cards/óculos.png" } />
                        <AsideItem itemQtd={2} itemSize="M" imgUrl={"Images/Desktop/Imagens Cards/Tenis.png" } />
                       
                    </div>
                    <div className={styles.aside_footer}>
                        <Link to="./cart">
                            <MeteoraBtn text='Ir para carrinho' />
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
                >
                    <StyledBadge badgeContent={4} color="secondary" >
                        <ShoppingCartIcon color="primary" />
                    </StyledBadge>
                </IconButton>

            </div>
        </div>
    )
}

export default AsideCart