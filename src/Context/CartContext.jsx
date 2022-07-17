import { createContext, useState, useEffect } from 'react'
import Swal from 'sweetalert2'
export const Context = createContext()

//Desde donde pasamos las props que queremnos compartir a todos los componentes

export default function CartContext({ children }) {
  const [cart, cartSet] =  useState(JSON.parse(localStorage.getItem('productos')) ?? []);
  const [disabled, disabledSet] = useState(true)
  const [idBuy,idBuySet] =useState("")


  //Error
  const error = () =>{ 
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'A ocurrido un error',
      footer: 'Vuelve a intertarlo'
    })}

  // Metodo Some- Nos indica si el producto esta en el carrito o no , Retorna un boolean
const isInCart = (id) =>{
  return cart.some(x => x.id === id)
}

  // Agrega item al carrito sin pisar los agregados,
  function addItem(item,qty) {
    const newItem = {...item,qty}

    if(isInCart(newItem.id)){
      const buscarProd = cart.find(x => x.id === newItem.id )
      const indiceProd = cart.indexOf(buscarProd)
      const array2 =[...cart]
      array2[indiceProd].qty + qty > newItem.stock ? array2[indiceProd].qty  = (error(),newItem.stock) : array2[indiceProd].qty += qty
      cartSet(array2)
      
    } else{
      cartSet([...cart,newItem])
      
    }

}

//Borra item del carrito- Por id y retorna un nuevo array para si dicho producto
const deleteItem = (id) =>{
  return cartSet(cart.filter(x => x.id !== id))

}
// Vaciar carrito
const emptyCart = () =>{
cartSet([])
}

// Indica numero del cart
const getItememQty = () =>{
  return cart.reduce((acc,x) => acc += x.qty,0)

}
// suma total del carrito
const getItemPrice = () =>{
  return cart.reduce((acc,x) => acc += x.qty * x.price,0 )
}


useEffect(() => {
  localStorage.setItem('productos', JSON.stringify(cart))
  }, [cart])



  return (
    <Context.Provider value={{cart, cartSet,isInCart,addItem,getItememQty,emptyCart,getItemPrice,deleteItem,disabled,disabledSet,idBuy,idBuySet,error}}>{children}</Context.Provider>
  )
}
