

import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../Context/CartContext';
import ItemList from './ItemList';



export default function ItemListConteiner() {
  const {itemDet} = useContext(Context)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);
  const {idParams}= useParams()
  console.log(idParams)

  useEffect(() => {
  const articulos = new Promise ((res,)=>{
    setTimeout(()=>{
      (!idParams) ? res(itemDet) : res(itemDet.filter(item => item.category === idParams))
articulos
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
    },2000)

  })
},[idParams])


  return (
      <>
      <div>{loading && <div className='text-center h1'> Loading...</div>}</div>
      <div>{error && 'Hubo un error al cartar el catalogo'}</div>
      <div>{resultado && <>

      
    <ItemList result= {resultado} 
              /></>}</div>
    </>
  )
}
