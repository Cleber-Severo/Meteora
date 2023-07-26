
import './App.css'
import { Banner } from '/src/components/Banner'
import Cabecalho from '/src/components/Cabecalho'
import { Categories } from '/src/components/Categories'

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
