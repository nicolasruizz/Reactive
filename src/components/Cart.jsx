import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/CartContext'

export default function Cart() {
let {cart , emptyCart,getItemPrice,deleteItem} = useContext(Context)

  return (
    <>
    {cart.length >= 1 && <><h2 className='mt-3 ml-1'>Productos</h2> {cart.map(item =>(
      <div className='row mx-4 my-1' key={item.id}>
        <img src={item.img} width={50} height={50} alt={item.name}></img>
        <span>{item.name} x {item.qty} $ {item.price*item.qty}</span>
        <button className='ml-5' onClick={()=>{deleteItem(item.id)}}>X</button></div>))} <hr></hr><span className='mb-4 mx-5'> Total a pagar : {getItemPrice()}</span><button className='ml-4' onClick={()=>emptyCart()}> Vaciar Carrito</button></>}
    {cart.length === 0 &&<h1> No hay Prodructos en el carrito</h1>}
    </>
  )
}
