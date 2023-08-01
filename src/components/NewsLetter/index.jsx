import React from 'react'
import MeteoraBtn from '../MeteoraBtn'

const NewsLetter = () => {
    return (
        <form>
            <p>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</p>
            <div>
                <input type="text" placeholder='Digite Seu email' />
                <MeteoraBtn text='Enviar' />
                <button>Enviar</button>
            </div>
        </form>
    )
}

export default NewsLetter