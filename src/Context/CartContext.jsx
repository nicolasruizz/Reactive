import React,{createContext, useState,useEffect} from 'react'

export const Context =createContext()

export default function CartContext({ children }) {
const [cart,cartSet] = useState([])

function addOn(){
    cartSet([...cart ,{}])
      
}
useEffect(() => {
console.log("render cartCon")
  }, [cart])



  return (
    <Context.Provider value={{addOn, cart,cartSet}}>{children}</Context.Provider> 
  )
}
