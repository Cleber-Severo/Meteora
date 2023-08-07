
import { useEffect, useState } from 'react'
import './App.css'
import Caroulsel from './components/Caroulsel'
import { Facilities } from './components/Facilities'
import Footer from './components/Footer'
import NewsLetter from './components/NewsLetter'
import { Products } from './components/Products'
import { Banner } from '/src/components/Banner'
import Cabecalho from '/src/components/Cabecalho'
import { Categories } from '/src/components/Categories'

function App() {

  const [meteoraDB, setMeteoraDB] = useState();

  useEffect(() => {

    async function awaitData() {
      const url = await fetch('https://my-json-server.typicode.com/Cleber-Severo/Meteora-db/db');
      const data = await url.json();
      return setMeteoraDB(data);
    }

    awaitData();
  }, []);

  if (meteoraDB) {
    return (
      <div className='app-wrapper'>
        <Cabecalho />
        <Banner />
        <Categories meteoraDB={meteoraDB.categories} />
        <Products meteoraDB={meteoraDB.products} />
        <Facilities />
        <NewsLetter />
        <Footer />
  
      </div>
    )
  }



}

export default App
