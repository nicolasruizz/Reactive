import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import '../Cart/FormFinish.css'


export default function Contacto() {



const db =getFirestore()
const ordersCollection = collection(db, 'consult')

function handleClickform(valores,resetForm){
  const consult= {
      buyer:{
        nombre: valores.nombre,
        correo: valores.correo,
        cel: valores.cel,
        text: valores.text},
  }

addDoc(ordersCollection,consult)
resetForm()

}

return (
<>


<Formik 
    initialValues={{
      nombre:'',
      correo:'',
      cel:'',
      text:''
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
  if(!valores.text){
    errores.text="Ingrese su consulta"
  }
  return errores;

  
  }}

    onSubmit={(valores, { resetForm })=>{ handleClickform(valores,resetForm)}}

    >{({ errors})=>(
    <Form  className='row border rounded text-white my-1 mx-auto col-md-10 col-xl-5 justify-content-center form h-100' >
        <h2 className='h4'>Ingresa tu consulta y nos contactaremos contigo.</h2>

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
        <Field 
        type="cel" 
        id="text" 
        name='text' 
        placeholder='Ingrese su consulta'
        className='col-8 input' 
  
        />
        <ErrorMessage name="text" component={()=>(<p className=' error col-8'>{errors.text}</p>)} />

        
      <button type='submit' className='col-6 myButton1 my-4'> Enviar Formulario</button>
    </Form>)}
    
</Formik>
</>)}