

import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../Context/CartContext';
import ItemList from './ItemList';

//Como se muestra dicha lista de items

export default function ItemListConteiner() {
  const { itemDet } = useContext(Context)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);
  const {idParams}= useParams()
  
// Promesa para mostrar Lista de Items
 useEffect(() => {
  const articulos = new Promise ((res,)=>{
    setTimeout(()=>{
      
      (idParams === undefined) ? res(itemDet) : res(itemDet.filter(item => item.category === idParams))
articulos
.then((result)=>{
  setResultado(result)
})
.catch((error)=>{
  setError(error)
})
.finally(()=>{
  setLoading(false)

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
