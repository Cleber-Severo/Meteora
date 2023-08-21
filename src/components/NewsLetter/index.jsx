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

import styles from './NewsLetter.module.css'
import MeteoraBtn from '../MeteoraBtn'

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

const NewsLetter = () => {

    const [open, setOpen] = React.useState(false);
    const [validation, setValidation] = React.useState("");
    const [warning, setWarning] = React.useState("valid");

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    function formValidation(e) {
        e.preventDefault();
       
        if (validation == "") {
            setWarning('danger');
            setTimeout(() => { setWarning('valid') }, 2500)
            return;
        }
        setWarning('valid')    
        handleClickOpen()
    }



    return (
        <form className={styles.container} onSubmit={e => { formValidation(e) }}>
            <div className={styles.newsLetter}>
                <p>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <b>Cadastre-se!</b></p>
                <div className={`${styles[warning]}`}>
                    <input
                        type="text"
                        placeholder='Digite Seu email'
                        onChange={(e) => { setValidation(e.target.value) }}
                    />
                    <MeteoraBtn>
                        <button>
                            Enviar
                        </button>
                    </MeteoraBtn>
                    <span>Insira um email válido ex: email@exemplo.com</span>
                </div>
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
                        <h2>E-mail cadastrado com sucesso!</h2>
                    </div>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    Em breve você receberá novidades exclusivas da Meteora.
                </DialogContent>

            </BootstrapDialog>
        </form>
    )
}

export default NewsLetter