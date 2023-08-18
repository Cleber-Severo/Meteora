import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import styles from './SideCart.module.css'

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
            <div className={styles.overlay}>
                <div className={`${styles.aside} ${ asideToggle ? styles.show : styles.hide }`}>
                    content
                </div>
                <IconButton 
                    aria-label="cart" 
                    className={styles.cartIcon}
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