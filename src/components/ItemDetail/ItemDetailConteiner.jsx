import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { Spinner } from 'reactstrap'
import '../Home/Loading.css'

// Detalle del item

export default function ItemDetailConteiner() {
const {idParams}= useParams()
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const [result, setResult] = useState();

useEffect(() => {

  const db = getFirestore()
  const productRef = doc(db,'items',idParams)
  getDoc(productRef)
  .then(snapshot =>{
    setResult({...snapshot.data(), id:snapshot.id})})
  .catch((error)=>{
    setError(error)
  })
   .finally(()=>{
   setLoading(false);
   })


},[idParams])


  return (
    <><div>{loading && 
    <div className='divSpinnerPadre'>
      <div className='divSpinnerHijo'>
        <Spinner color='ligth' className='spinnerCarga'/> 
      </div>
    </div>}</div>
    <div>{error && 'Hubo un error al cartar el catalogo'}</div>
    <div>{result &&
    <ItemDetail item ={result} />}
    </div>
    </>
  )
}
