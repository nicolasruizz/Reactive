import React from 'react'
import { useContext } from 'react'
import { Context } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import FormFinish from './FormFinish'
import './Cart.css' 


export default function Cart() {


let {cart , emptyCart,getItemPrice,deleteItem} = useContext(Context)

  return (
    <>
    {cart.length >= 1 ?<>
     <div className='row my-3'>
    <div className=' form text-white my-1 mx-auto col-md-10 col-xl-6 '>
      <h2 className='text-center'></h2>
       {cart.map(item =>(
      <div className='row mx-4 my-1 p-3' key={item.id}>
        <img className='  col-4 col-md-2 ' src={item.img} width={150} height={180} alt={item.name}></img>
        <strong className='d-flex align-items-center mx-auto col-5 col-xl-6'>{item.name} x {item.qty} = ${item.price*item.qty}</strong>
        <button className=' bg-dark  px-1 my-auto col-2 myButton' onClick={()=>{deleteItem(item.id)}}>x</button>
        </div>))}
        
        <div className=''>
        <hr className='bg-light'></hr>
        <strong className='mb-4 mx-5 col-12'> Total a pagar : ${getItemPrice()}</strong><br></br>
        <strong className='mb-4 mx-5 col-12'> Hasta 6 cuotas de : ${parseInt(getItemPrice()/6)}</strong>
        <button className='mx-1 my-5 rounded bg-dark px-1 mx-5 myButton' onClick={()=>emptyCart()}> Vaciar Carrito</button>
        
        
         </div>
    </div>
    <FormFinish/>
    </div>
    </>
         :  cart.length === 0 && <>
         <div className='d-flex-column align-items-cente'>
          <div className=''>
            <h2 className='text-white text-center'> El carrito esta vacío, llenalo por favor</h2>  
            </div>
            <div className='d-flex justify-content-center '>
            <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="white" className="bi bi-cart mx-auto " viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg></div>
            <div className='d-flex justify-content-center '>
            <button className='mx-1 my-5 rounded bg-dark btn-prymary px-5 ' ><Link to="/productos" className=' text-white'style={{ textDecoration: 'none' }}> Ir a productos</Link></button>
            </div>
         </div></>
         }

         
    </>
  )
}
