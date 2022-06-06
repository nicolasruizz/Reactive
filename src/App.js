
import ItemListConteiner from './components/ItemListConteiner';
import NavBar from './components/NavBar';
import CartContext from './Context/CartContext';


const App = () => {

  
  return (<> 
  <CartContext>
    <NavBar />
    <ItemListConteiner
     />
     </CartContext> </>

)}

export default App;
