
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './components/Cart';
import Checkout from './components/Checkout';
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
      {/* Mostrar Index*/}
    <Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    {/* Mostrar los datos de contacto */}
    <Route path='/contacto' element={<Contacto/>} />
    {/* Mostrar los productos que estan en el carrito */}
    <Route path='/cart' element={<Cart/>} />
    {/* Mostrar un unico producto */}
    <Route path='/producto/:idParams' element={<ItemDetailConteiner/>} />
    {/* Mostrar todos los productos de una categoria en especifica */}
    <Route path="/category/:idParams" element={<ItemListConteiner />} />
    {/* Mostrar todos los productos */}
    <Route path="/productos" element={<ItemListConteiner />} />

    {/* Muestra Chekout*/}
    <Route path="/checkout" element={<Checkout/>} />
  
    
  </Routes>
  
  </BrowserRouter>
     </CartContext>
    </>

)}

export default App;
