import { createContext, useState, useEffect } from 'react'

export const Context = createContext()

//Desde donde pasamos las props que queremnos compartir a todos los componentes

export default function CartContext({ children }) {
  const [cart, cartSet] = useState([])
  const [itemDet, itemDetSet] = useState([])

  // Metodo Some- Nos indica si el producto esta en el carrito o no , Retorna un boolean
const isInCart = (id) =>{
  return cart.some(x => x.id === id)
}

  // Agrega item al carrito sin pisar los agregados,
  function addItem(item,qty) {
    const newItem = {...item,qty}
    console.log(newItem.id)

    if(isInCart(newItem.id)){
      const buscarProd = cart.find(x => x.id === newItem.id )
      const indiceProd = cart.indexOf(buscarProd)
      const array2 =[...cart]
      array2[indiceProd].qty += qty
      console.log(array2)
      cartSet(array2)
      console.log(cart)
    } else{
      cartSet([...cart,newItem])
      
    }

}
console.log(cart)

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
    console.log(cart)
  }, [cart])

useEffect(() => {
    fetch("https://mocki.io/v1/2859acb4-f0d4-4d81-aca7-a49807374606",)
      .then(response => response.json())
      .then(data => {
        itemDetSet(data)
      })
      .catch(e => {
        console.log("no se puede acceder", e)

      })
      .finally(
      )
  }, [])


  return (
    <Context.Provider value={{cart, cartSet, itemDet,itemDetSet,isInCart,addItem,getItememQty,emptyCart,getItemPrice,deleteItem}}>{children}</Context.Provider>
  )
}
