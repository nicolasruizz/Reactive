import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import FormFinish from './FormFinish'

export default function Cart() {
let {cart , emptyCart,getItemPrice,deleteItem} = useContext(Context)

  return (
    <>
    {cart.length >= 1 ?<> 
    <div className='border rounded bg-dark text-white my-1 mx-auto col-md-10 col-xl-6 '><h2 className='text-center'>Productos</h2> <div></div>{cart.map(item =>(
      <div className='row mx-4 my-1 p-3  border rounded ' key={item.id}>
        <img className='  col-4 col-md-2 rounded-circle' src={item.img} width={90} height={90  } alt={item.name}></img>
        <strong className='d-flex align-items-center mx-auto col-5 col-xl-6'>{item.name} x {item.qty} = ${item.price*item.qty}</strong>
        <button className=' rounded-circle bg-dark text-white px-4 col-2' onClick={()=>{deleteItem(item.id)}}>X</button>
        </div>))}
        
        <div className=''>
        <hr></hr>
        <strong className='mb-4 mx-5 col-12'> Total a pagar : ${getItemPrice()}</strong><br></br>
        <strong className='mb-4 mx-5 col-12'> Hasta 6 cuotas de : ${parseInt(getItemPrice()/6)}</strong>
        <button className='mx-1 my-5 rounded bg-dark text-white px-1 col-12 ' onClick={()=>emptyCart()}> Vaciar Carrito</button>
        
        
         </div>
    </div>
    <FormFinish/>
    </>
         : cart.length === 0 && <>
         <div>
            <h1> No hay Prodructos en el carrito</h1>
            <Link to="/productos"><button className='mx-1 my-5 rounded bg-dark text-white px-1 col-3 ' > Ir a productos</button></Link>
         </div></>}
         
    </>
  )
}
