import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context/CartContext'
import './FormFinish.css'



export default function FormFinish() {


const navigate = useNavigate()


let {cart , getItemPrice,emptyCart,disabledSet,idBuySet} = useContext(Context)

const db =getFirestore()
const ordersCollection = collection(db, 'orders')

function handleClickform(valores,resetForm){
  disabledSet(false) 
    const order= {
        buyer:{
          nombre: valores.nombre,
          correo: valores.correo,
          cel: valores.cel},
        items:cart,
        total:getItemPrice()
    }

addDoc(ordersCollection,order)
.then(({id})=>{
  idBuySet(id)
})
resetForm()
navigate('/checkout')
emptyCart()

}

  return (
<>


<Formik 
      initialValues={{
        nombre:'',
        correo:'',
        cel:''
      }}
      validate={(valores)=>{
        let errores ={};

        if(!valores.nombre){
          errores.nombre= "Por favor ingresa un nombre"
        }
        else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
          errores.nombre= "El nombre solo puede tener letras y espacios"
      }
      if(!valores.correo){
        errores.correo= "Por favor ingresa un correo"
      }
      else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
        errores.correo= "El correo solo puede tener letras, números, puntos y guiones"
    }
    if(!valores.cel){
      errores.cel="Por favor ingresa un celular"
    }
    else if(!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(valores.cel)){
      errores.cel= "El telefono solo puede tener numeros y un total de 10"
    }
    return errores;

    
    }}

      onSubmit={(valores, { resetForm })=>{ handleClickform(valores,resetForm)}}

      >{({ errors})=>(<Form  className='row  text-white my-1 mx-auto col-md-10 col-xl-5 justify-content-center form ml-1 '>
          <h2 className='h4 ml-2'>Complete el formulario para terminar su compra</h2>

          <Field 
          type="text" 
          id="nombre" 
          name='nombre' 
          placeholder='Ingrese su nombre'
          className='col-8 mt-2 input' 

          />
          <ErrorMessage name="nombre" component={()=>(<p className='error col-8'>{errors.nombre}</p>)} />
          
          <Field 
          type="email" 
          id="correo" 
          name='correo' 
          placeholder='Ingrese su email'
          className='col-8 input' 
    
          />
          <ErrorMessage name="correo" component={()=>(<div  className='error col-8'>{errors.correo}</div>)} />

          <Field 
          type="cel" 
          id="cel" 
          name='cel' 
          placeholder='Ingrese su celular'
          className='col-8 input' 
    
          />
          <ErrorMessage name="cel" component={()=>(<p className=' error col-8'>{errors.cel}</p>)} />

          
        <button type='submit' className='col-6 myButton1 my-4'> Finalizar Compra</button>
      </Form>)}
      
  </Formik>
</>



  )
}
