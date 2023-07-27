
import './App.css'
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
    </div>
  )
}

export default App
