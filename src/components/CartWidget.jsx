import React,{useContext} from 'react'
import carrito from '../images/carrito.png'
import { Context } from '../Context/CartContext'
import { Link } from 'react-router-dom'

// BOTON DE CARRITO

export default  function CartWidget(){
  let {getItememQty,cart} = useContext(Context)


  return (
     <Link to="/cart"><button type="button" onClick={() => {<Link to="/cart"></Link>}}>
            <img src={carrito} width="30" height="30" alt=""></img>{cart.length === 0? "" : getItememQty()}
        </button></Link>
    
  )
}
