
import ItemListConteiner from './components/ItemListConteiner';
import NavBar from './components/NavBar';

const App = () => {
  let lista = ["Div 1","Div 2","Div 3"]
  function saludar(){
    alert("Buenas tocaste un boton")
    
  }
  
  return (<>  
    <NavBar />
    <ItemListConteiner
    saludar= {saludar}
    lista = {lista}
     /></>

)}

export default App;
