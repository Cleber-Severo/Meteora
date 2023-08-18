import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cabecalho from '/src/components/Cabecalho'
import Footer from '/src/components/Footer'
import Cart from './pages/Cart';
import { FilterContext, FilterProvider } from './context/Filter';


function RouterApp() {
    return (
        <BrowserRouter>
            <FilterProvider>
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path='/cart' element={<Cart />} ></Route>
                </Routes>
            </FilterProvider>
            <Footer />
        </BrowserRouter>
    )
}

export default RouterApp;