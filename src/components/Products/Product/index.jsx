import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import Grow from '@mui/material/Slide';



import styles from './Product.module.css'
import MeteoraBtn from '../../MeteoraBtn'
import ProductModalColorSize from '../ProductModalColorSize';
import { useCartContext } from '../../../context/Cart';
import { useState } from 'react';

function GrowTransition(props) {
    return <Grow {...props} />;
}

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


export const Product = ({ path, title, pricing, description, screen }) => {

    const [open, setOpen] = React.useState(false);
    const [openSnack, setOpenSnack] = React.useState(false);
    
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [productFormErr, setProductFormErr] = useState('valid');

    const [vertical, setverical] = React.useState('bottom');
    const [horizontal, setHorizontal] = useState('center');
    const [transitionSnack, setTransitionSnack] = useState({ Transition: GrowTransition } )

    const { addProduct, doesProductExist, cartItemId, setCartItemId } = useCartContext()

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenSnack = () => {
        setOpenSnack(true);
    };
    const handleCloseSnack = () => {
        setOpenSnack(false);
    };

    function validateProductForm(e) {
        e.preventDefault()

        if (color === "" || size === "") {
            setProductFormErr("notValid")
            setTimeout(() => { setProductFormErr('valid') }, 2500)
            return;
        }
        
    
        addProduct({ path, title, pricing, description, screen, cartItemId, color, size })
        setColor("")
        setSize("")
        handleClose()
        handleClickOpenSnack()
        
    }

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
                    <form className={styles.modalContent} onSubmit={(e) => { validateProductForm(e)}} >
                        <img src={path} alt="" />
                        <div>
                            <div className={styles.modalProductInfo}>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <h3>R$ {pricing}</h3>
                                <span>Vendido e entregue por Riachuelo</span>
                            </div>

                            <ProductModalColorSize
                               setColor={setColor}
                               setSize={setSize}
                                productFormErr={productFormErr}
                            />

                            <MeteoraBtn>
                                <button>
                                    Adicionar à sacola
                                </button>
                            </MeteoraBtn>
                        </div>
                    </form>
                </DialogContent>

            </BootstrapDialog>

            <Snackbar
                open={openSnack}
                autoHideDuration={1500}
                onClose={handleCloseSnack}
                anchorOrigin={{ vertical, horizontal }}
                message="Produto adicionado a sacola!"
                TransitionComponent={transitionSnack.Transition}
            />
        </article>
    )
}
