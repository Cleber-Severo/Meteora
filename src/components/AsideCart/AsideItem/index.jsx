import { FiTrash2 } from "react-icons/Fi";

import styles from './AsideItem.module.css'

const AsideItem = () => {
  return (
      <article>
          <img src="Images/Desktop/Imagens Cards/Camiseta.png" alt=""></img>
          <p>Camiseta Conforto</p>
          <span>R$ 70,00</span>
          <FiTrash2 />
      </article>
  )
}

export default AsideItem