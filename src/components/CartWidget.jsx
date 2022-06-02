import React,{useContext} from 'react'
import carrito from '../images/carrito.png'
import { Context } from '../Context/CartContext'

export default  function CartWidget(){
  let {cart} = useContext(Context)
  console.log(cart)
  return (
     <button type="button">
            <img src={carrito} width="30" height="30" alt=""></img>{cart.length}
        </button>
    
  )
}