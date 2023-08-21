import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cabecalho from '/src/components/Cabecalho'
import Footer from '/src/components/Footer'
import Cart from './pages/Cart';
import { FilterProvider } from './context/Filter';
import { CartProvider } from './context/Cart';


function RouterApp() {
    return (
        <BrowserRouter>
            <FilterProvider>
                <Cabecalho />
                <CartProvider>
                    <Routes>
                        <Route path="/" element={<Home />} ></Route>
                        <Route path='cart' element={<Cart />} ></Route>
                    </Routes>
                </CartProvider>
            </FilterProvider>
            <Footer />
        </BrowserRouter>
    )
}

export default RouterApp;