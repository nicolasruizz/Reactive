
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './components/Cart';
import Contacto from './components/Contacto';
import Home from './components/Home';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import ItemListConteiner from './components/ItemListConteiner';
import NavBar from './components/NavBar';
import CartContext from './Context/CartContext';




const App = () => {

  
  return (<> 
   <CartContext className="body">
  <BrowserRouter>
  <NavBar />
  <Routes>
      {/* Mostrar todos los productos */}
    <Route path='/' element={<Home/>} />
    {/* Mostrar todos los datos de contacto */}
    <Route path='/contacto' element={<Contacto/>} />
    {/* Mostrar los productos que estan enel carrito */}
    <Route path='/cart' element={<Cart/>} />
{/* Mostrar un unico producto */}
    <Route path='/productos/:idParams' element={<ItemDetailConteiner/>} />
    {/* Mostrar todos los productos de una category */}
    <Route path="/category/:idParams" element={<ItemListConteiner />} />
  </Routes>
  
  </BrowserRouter>
     </CartContext>
    </>

)}

export default App;
