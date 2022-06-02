
import ItemListConteiner from './components/ItemListConteiner';
import NavBar from './components/NavBar';
import CartContext from './Context/CartContext';


const App = () => {
  let lista = ["Div 1","Div 2","Div 3"]
  function saludar(){
    alert("Buenas tocaste un boton")
  
  }
  
  return (<> 
  <CartContext>
    <NavBar />
    <ItemListConteiner
    saludar= {saludar}
    lista = {lista}
     />
     </CartContext> </>

)}

export default App;
