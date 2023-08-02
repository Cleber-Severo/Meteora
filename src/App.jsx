
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
  return (
    <div className='app-wrapper'> 
      <Cabecalho />
      <Banner />
      <Categories />
      <Products />
      <Facilities />
      <NewsLetter />
      <Footer />
      
    </div>
  )
}

export default App
