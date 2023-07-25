
import './App.css'
import { Banner } from './components/Banner'
import Cabecalho from './components/Cabecalho'
import { Categories } from './components/Categories'

function App() {
  return (
    <div className='app-wrapper'> 
      <Cabecalho />
      <Banner />
      <Categories />
    </div>
  )
}

export default App
