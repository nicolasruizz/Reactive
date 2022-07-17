import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context/CartContext'

export default function Checkout() {
const navigate =useNavigate()

let { idBuy }=useContext(Context)

    function handleClickFinish(){
       
        navigate('/home')
      }

    
  return (
    <>
      <div className='rounded text-white my-1 mx-auto col-md-10 col-xl-5 justify-content-center form '>
    <div className='h2 mt-5 text-center'>Gracias por su compra!</div><br></br>
    <div className='mx-4 mt-2 h3'>Su codigo de compra es: <strong>{idBuy}</strong> </div><br/>
    <div className='mx-4 mt-5 h6 text-center d-flex align-items-end'> Un representante del area se contacto a correo su electronico.</div><br></br>
    <div className='d-flex justify-content-center mx-auto'>
    <button className='myButton my-5 ' onClick={()=> handleClickFinish()}>
      Volver a la pagina principal
    </button>
    </div>
  </div>
  </>
  )
}
