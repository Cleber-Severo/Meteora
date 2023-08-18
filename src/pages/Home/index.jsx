
import { useEffect, useState } from 'react'
import Footer from '/src/components/Footer'
import NewsLetter from '/src/components/NewsLetter'
import { Products } from '/src/components/Products'
import { Banner } from '/src/components/Banner'
import Cabecalho from '/src/components/Cabecalho'
import { Categories } from '/src/components/Categories'
import { Facilities } from '../../components/Facilities'
import { useFilterContext } from '../../context/Filter'

import styles from './Home.module.css'
import SideCart from '../../components/SideCart'

function Home() {
    const { meteoraDB } = useFilterContext();

    if (meteoraDB) {
        return (
            <div className={styles.app_wrapper}>
                <Banner />
                <Categories/>
                <Products />
                <Facilities />
                <NewsLetter />
                <SideCart />
            </div>
        )
    }



}

export default Home
