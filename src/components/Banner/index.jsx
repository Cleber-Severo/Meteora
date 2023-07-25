import React from 'react'
import styles from './Banner.module.css'
import desktopOneImg from './Banner-1-desktop.png'
import tabletOneImg from './Banner-1-tablet.png'
import mobileOneImg from './Banner-1-mobile.png'

export const Banner = () => {
  return (
    <div className={styles.banner} >
      <img src={desktopOneImg} className={styles.imgOneDesktop} alt="" />
      <img src={tabletOneImg} className={styles.imgOneTablet} alt="" />
      <img src={mobileOneImg} className={styles.imgOneMobile} alt="" />
    </div>
  )
}
