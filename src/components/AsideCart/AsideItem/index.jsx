import { FaRegTrashAlt } from "react-icons/fa";

import styles from './AsideItem.module.css'
import { useCartContext } from "../../../context/Cart";

const AsideItem = ({ path, title, pricing, description, screen, cartItemId, quantity, size, color }) => {

    const { addProduct, removeProduct, deleteProduct } = useCartContext();

    return (
        <article className={styles.aside_item}>
            <img src={path} alt=""></img>
            <div className={styles.item_info}>

                <p>{title}</p>

                <div className={styles.itemDescription}>
                    <span className={styles.sizing}>{size}</span>
                    <span>-</span>
                    <div className={`${styles[color]}`}>
                        <div></div>
                    </div>
                </div>

                <div className={styles.itemDescription}>
                    <span>R${pricing}</span>
                    <div className={styles.quantity}>
                        <span onClick={() => removeProduct(cartItemId)} >-</span>
                        <span>{quantity}</span>
                        <span onClick={() => { addProduct({ path, title, pricing, description, screen, cartItemId }) }} >+</span>
                    </div>
                </div>

            </div>
            <FaRegTrashAlt
                className={styles.deleteIcon}
                onClick={() => { deleteProduct(cartItemId) }}
            />
        </article>
    )
}

export default AsideItem