
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';
import Contacto from './components/Home/Contacto';
import { Footer } from './components/Footer/Footer';
import Home from './components/Home/Home';
import ItemDetailConteiner from './components/ItemDetail/ItemDetailConteiner';
import ItemListConteiner from './components/ItemList/ItemListConteiner';
import NavBar from './components/NavBar/NavBar';
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
  <Footer />
  </BrowserRouter>
     </CartContext>
    </>

)}

export default App;
