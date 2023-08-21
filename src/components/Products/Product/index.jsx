import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


import styles from './Product.module.css'
import MeteoraBtn from '../../MeteoraBtn'
import ProductModalColorSize from '../ProductModalColorSize';
import { useCartContext } from '../../../context/Cart';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};


export const Product = ({ path, title, pricing, description, screen, id }) => {

    const [open, setOpen] = React.useState(false);
    const { addProduct } = useCartContext()

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <article className={`${styles[screen]} ${styles.product}`}>
            <img src={path} alt="" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <h3>R$ {pricing}</h3>

                <MeteoraBtn>
                    <button onClick={() => { handleClickOpen() }} >Ver mais </button>
                </MeteoraBtn>
            </div>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                className={styles.modal}
            >
                <BootstrapDialogTitle id="customized-dialog-title" className={styles.headerContainer} onClose={handleClose}>
                    <div className={styles.modalHeader}>
                        <img src="Images/check-circle.svg" alt="" />
                        <h2>Confira detalhes sobre o produto</h2>
                    </div>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <form className={styles.modalContent} onSubmit={(e) => { e.preventDefault() }} >
                        <img src={path} alt="" />
                        <div>
                            <div className={styles.modalProductInfo}>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <h3>R$ {pricing}</h3>
                                <span>Vendido e entregue por Riachuelo</span>
                            </div>
                            <ProductModalColorSize />

                            <MeteoraBtn>
                                <button onClick={() => { addProduct({path, title, pricing, description, screen, id}) }}>
                                    Adicionar à sacola
                                </button>
                            </MeteoraBtn>
                        </div>
                    </form>
                </DialogContent>

            </BootstrapDialog>
        </article>
    )
}
