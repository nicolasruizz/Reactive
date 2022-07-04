import './FormFinish.css'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context/CartContext'
import {addDoc, collection, getFirestore} from 'firebase/firestore'



export default function FormFinish() {
const [name,nameSet] =useState("")
const [email,emailSet] =useState("")
const [cel,celSet] =useState("")



const navigate = useNavigate()


let {cart , getItemPrice,emptyCart,disabled,disabledSet,idBuySet} = useContext(Context)

const db =getFirestore()
const ordersCollection = collection(db, 'orders')

function handleClickform(){
  disabledSet(false) 
    const order= {
        buyer:{name,email,cel},
        items:cart,
        total:getItemPrice()
    }

addDoc(ordersCollection,order)
.then(({id})=>{
  idBuySet(id)
  console.log(id)
})
celSet("")
nameSet("")
emailSet("")
navigate('/checkout')
emptyCart()

}





  return (<>
  <div className=' row border rounded text-white my-1 mx-auto col-md-10 col-xl-5 justify-content-center form '>
    <h2 className='h4'>Complete el formulario para terminar su compra</h2>            
        <input onChange={(e)=>{nameSet(e.target.value)}} type="text" placeholder='Ingrese su nombre' className='col-8 my-2 input'/>
        <input onChange={(e)=>{emailSet(e.target.value)}} type="mail" placeholder='Ingrese su email' className='col-8 input'/>
        <input onChange={(e)=>{celSet(e.target.value)}} value={cel} type="text" placeholder='Ingrese su número de celular' className='col-8 my-2 input'/>
        <button onClick={()=> handleClickform()} className='col-6 myButton1 my-4 ' disabled={!disabled}>Finalizar compra</button>
        </div>
        
        </>

  )
}
