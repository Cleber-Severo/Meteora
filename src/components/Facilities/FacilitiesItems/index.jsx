import React from 'react'
import styles from './FacilitiesItems.module.css'

export const FacilitiesItems = ({image, title, description}) => {
  return (
    <div>
        <img src={image} alt="" />
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}
