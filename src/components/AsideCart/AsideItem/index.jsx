import { FiTrash2 } from "react-icons/fi";

import styles from './AsideItem.module.css'
import { useCartContext } from "../../../context/Cart";

const AsideItem = ({ path, title, pricing, description, screen, id, quantity }) => {
    
    const { addProduct, removeProduct } = useCartContext();

    return (
        <article className={styles.aside_item}>
            <img src={path} alt=""></img>
            <div className={styles.item_info}>
                <p>{title}</p>

                <div className={styles.itemDescription}>
                    <span>gg</span>
                    <span> - </span>
                    <span>R${pricing}</span>
                </div>
                <div className={styles.quantity}>
                    <span onClick={() => removeProduct(id) } >-</span>
                    <span>{quantity}</span>
                    <span onClick={() => { addProduct({ path, title, pricing, description, screen, id }) }} >+</span>
                </div>

            </div>
            <FiTrash2 className={styles.deleteIcon} />
        </article>
    )
}

export default AsideItem