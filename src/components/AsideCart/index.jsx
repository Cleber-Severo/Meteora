import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MeteoraBtn from '../MeteoraBtn'

import { ImCross } from "react-icons/im";

import styles from './AsideCart.module.css'
import { Link } from 'react-router-dom';

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
                        <h2>Resumo do carrinho</h2>
                        <ImCross
                            className={styles.closeIcon}
                            onClick={() => { setAsideToggle(!asideToggle) }}
                        />
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