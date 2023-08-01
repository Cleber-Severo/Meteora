import React from 'react'
import styles from './NewsLetter.module.css'
import MeteoraBtn from '../MeteoraBtn'


const NewsLetter = () => {
    return (
        <form className={styles.container}>
            <div className={styles.newsLetter}>
                <p>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <b>Cadastre-se!</b></p>
                <div>
                    <input type="text" placeholder='Digite Seu email' />
                    <MeteoraBtn text='Enviar' />
                </div>
            </div>
        </form>
    )
}

export default NewsLetter