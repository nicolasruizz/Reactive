

import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context/CartContext'

export default function Breakout() {
const [name,nameSet] =useState("")
const [email,emailSet] =useState("")
const [cel,celSet] =useState("")

const navigate = useNavigate()


let {cart , getItemPrice,emptyCart} = useContext(Context)


function handleClick(){
    const order= {
        buyer:{name,email,cel},
        items:cart,
        total:getItemPrice()
    }

    console.log(order)
celSet("")
emptyCart()
navigate("/home")

}


  return (<>
    <h1>Complete el formulario para terminar su compra</h1>            
        <input onChange={(e)=>{nameSet(e.target.value)}} type="text" placeholder='Ingrese su nombre'/>
        <input onChange={(e)=>{emailSet(e.target.value)}} type="mail" placeholder='Ingrese su email'/>
        <input onChange={(e)=>{celSet(e.target.value)}} value={cel} type="text" placeholder='Ingrese su número de celular'/>
        <button onClick={()=> handleClick()}>Terminar compra</button></>

  )
}
