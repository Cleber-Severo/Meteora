import { FiTrash2 } from "react-icons/Fi";

import styles from './AsideItem.module.css'

const AsideItem = ({ imgUrl, itemQtd, itemSize }) => {
    return (
        <article className={styles.aside_item}>
            <img src={imgUrl} alt=""></img>
            <div className={styles.item_info}>
                <p>Camiseta Conforto</p>

                <div className={styles.description}>
                    <span>{itemSize}</span>
                    <span> - </span>
                    <span>R$ 70,00</span>
                </div>
                <div className={styles.quantity}>
                    <span>-</span>
                    <span>{itemQtd}</span>
                    <span>+</span>
                </div>

            </div>
            <FiTrash2 className={styles.deleteIcon} />
        </article>
    )
}

export default AsideItem