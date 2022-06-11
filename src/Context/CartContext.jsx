import React, { createContext, useState, useEffect } from 'react'

export const Context = createContext()

export default function CartContext({ children }) {
  const [cart, cartSet] = useState([])
  const [itemDet, itemDetSet] = useState([])

  function addOn() {
    cartSet([...cart, {}])

  }
  useEffect(() => {
    console.log("render cartCon")
  }, [cart])


  useEffect(() => {
    fetch("https://mocki.io/v1/2859acb4-f0d4-4d81-aca7-a49807374606",)
      .then(response => response.json())
      .then(data => {
        itemDetSet(data)
        console.log(itemDet)
      })
      .catch(e => {
        console.log("no se puede acceder", e)

      })
      .finally(
        console.log("fin")
      )
  }, [])



  return (
    <Context.Provider value={{ addOn, cart, cartSet, itemDet,itemDetSet }}>{children}</Context.Provider>
  )
}
