import React, { useState , useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context/CartContext'
import ItemDetail from './ItemDetail'


export default function ItemDetailConteiner() {
let {itemDet} =useContext(Context)
const {idParams}= useParams()
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const [resultado, setResultado] = useState([]);

console.log(idParams)

useEffect(() => {
    const productos = new Promise ((res,)=>{
      setTimeout(()=>{
        (!idParams) ? res() : res(itemDet.find(item => item.id == idParams))
    productos
  .then((result)=>{
    setResultado(result)
  })
  .catch((error)=>{
    setError(error)
  })
  .finally(()=>{
    setLoading(false)
    console.log("se realizo correctamente")
  })
      },0)
  
    })
  },[idParams])


  return (
    <><div>{loading && <div className='text-center h1'> Loading...</div>}</div>
    <div>{error && 'Hubo un error al cartar el catalogo'}</div>
    <div>{resultado &&
    <ItemDetail item ={resultado} />}
    </div>
    </>
  )
}
