import './App.css'
import NavBar from './components/NavBar/NavBar';
import Homes from './components/main/inicio/Menu';
import ProductsList from './components/main/productView/ProductsList';
import Contac from './components/main/contacView/Contac';
import SingleProd from './components/SingleprodView/SingleProd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return(
  <>
  <BrowserRouter>


    <header className='header'>
        <NavBar/>
    </header>
    <Routes>
          <Route path="/" element={<Homes greeting={"BIENVENIDO A LA TIENDA DE FLIPPO"}/>} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/contact" element={<Contac/>} />
          <Route path="/products/:prodId" element={<SingleProd/>} />
        </Routes>
  <footer className='footer'>
  </footer>


  </BrowserRouter>
    </>
  )
}

export default App
