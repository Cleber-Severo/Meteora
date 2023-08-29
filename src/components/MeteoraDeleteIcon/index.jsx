import React from 'react'
import styles from './MeteoraDeleteIcon.module.css'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useCartContext } from '../../context/Cart';

const MeteoraDeleteIcon = ({ cartItemId }) => {
    const { deleteProduct } = useCartContext();

    return (

        <FaRegTrashAlt
            className={styles.deleteIcon}
            onClick={() => { deleteProduct(cartItemId) }}
        />

    )
}

export default MeteoraDeleteIcon