import React from 'react'
import styles from './Facilities.module.css'
import xDiamondImg from '/public/Images/Desktop/Ícones/x-diamond.png'
import arrowRepeatImg from '/public/Images/Desktop/Ícones/arrow-repeat.png'
import flowerImg from '/public/Images/Desktop/Ícones/flower1.png'

import { FacilitiesItems } from './FacilitiesItems'

export const Facilities = () => {
  return (
    <section className={styles.container}>
        <h2>Conheça todas as facilidades</h2>
          <div className={styles.facilitiesItems}>
            <FacilitiesItems 
                image={xDiamondImg} 
                title="Pague pelo pix"
                description="Ganhe 5% off em pagamentos via PIX"
            />

            <FacilitiesItems 
                image={arrowRepeatImg} 
                title="Troca Grátis"
                description="Fique livre para troca em até 30 dias."
            />

            <FacilitiesItems 
                image={flowerImg} 
                title="Sustentabilidade"
                description="Moda responsável, que respeita o meio ambiente"
            />
                
           
        </div>
    </section>
  )
}
