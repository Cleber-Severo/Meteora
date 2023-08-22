import { FiTrash2 } from "react-icons/fi";

import styles from './AsideItem.module.css'
import { useCartContext } from "../../../context/Cart";

const AsideItem = ({ path, title, pricing, description, screen, cartItemId, quantity, size }) => {
    
    const { addProduct, removeProduct, deleteProduct } = useCartContext();

    return (
        <article className={styles.aside_item}>
            <img src={path} alt=""></img>
            <div className={styles.item_info}>
                <p>{title}</p>

                <div className={styles.itemDescription}>
                    <span>{size}</span>
                    <span> - </span>
                    <span>R${pricing}</span>
                </div>
                <div className={styles.quantity}>
                    <span onClick={() => removeProduct(cartItemId) } >-</span>
                    <span>{quantity}</span>
                    <span onClick={() => { addProduct({ path, title, pricing, description, screen, cartItemId }) }} >+</span>
                </div>

            </div>
            <FiTrash2 
                className={styles.deleteIcon}
                onClick={() => { deleteProduct(cartItemId) } }
            />
        </article>
    )
}

export default AsideItem