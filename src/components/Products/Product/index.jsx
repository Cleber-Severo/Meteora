import React from 'react'

export const Product = ({path, title, description, screen}) => {
  return (
    <article>
        <img src={path} alt="" />
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <h3>price</h3>
            <button>Ver mais</button>
        </div>
    </article>
  )
}
