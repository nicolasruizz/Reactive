
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './components/Cart';
import Contacto from './components/Contacto';
import Home from './components/Home';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import ItemListConteiner from './components/ItemListConteiner';
import NavBar from './components/NavBar';
import CartContext from './Context/CartContext';
import 'bootstrap/dist/js/bootstrap'
import TestEventos from "./components/TestEventos";

import { initializeApp } from "firebase/app";




const App = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyDxRHk87AOdtmiw3CZSNCvnFtzppnKBDYg",
    authDomain: "andrethestore.firebaseapp.com",
    projectId: "andrethestore",
    storageBucket: "andrethestore.appspot.com",
    messagingSenderId: "953400759717",
    appId: "1:953400759717:web:c8ce4d67272f07bc1f444c"
  };
  
  
initializeApp(firebaseConfig);
  
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
    {/* Ruta test*/ }
    <Route path="/test" element={<TestEventos />} />
  </Routes>
  
  </BrowserRouter>
     </CartContext>
    </>

)}

export default App;
