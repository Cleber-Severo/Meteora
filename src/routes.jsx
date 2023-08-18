import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Cabecalho from '/src/components/Cabecalho'
import Footer from '/src/components/Footer'
import Cart from './pages/Cart';


function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path='/cart' element={<Cart />} ></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouterApp;