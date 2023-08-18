
import { useEffect, useState } from 'react'
// import './App.css'
import Footer from '/src/components/Footer'
import NewsLetter from '/src/components/NewsLetter'
import { Products } from '/src/components/Products'
import { Banner } from '/src/components/Banner'
import Cabecalho from '/src/components/Cabecalho'
import { Categories } from '/src/components/Categories'
import { Facilities } from '../../components/Facilities'
import { useFilterContext } from '../../context/Filter'

function Home() {
    const { meteoraDB } = useFilterContext();

    if (meteoraDB) {
        return (
            <div className='app-wrapper'>
                <Cabecalho />
                <Banner />
                <Categories/>
                <Products />
                <Facilities />
                <NewsLetter />
            </div>
        )
    }



}

export default Home
