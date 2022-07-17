import { Spinner } from 'reactstrap'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import '../Home/Loading.css'

//Como se muestra dicha lista de items

export default function ItemListConteiner() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);
  const {idParams}= useParams()
  
 

useEffect(() => {
const db= getFirestore()
const productsCollection= collection(db,'items')
if(idParams){ 
const q= query(productsCollection, where('category','==',idParams));
getDocs(q).then(snapshot =>{
  setResult(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})));
}).catch((error)=>{
   setError(error)
 }).finally(()=>{
 setLoading(false);
 })

}else{
  getDocs(productsCollection)
  .then(snapshot =>{
    setResult(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})));
  })
  .catch((error)=>{
     setError(error)
   })
   .finally(()=>{
   setLoading(false);
   })
}


}, [idParams])



  return (
      <>
      <div>{loading && 
      <div className='divSpinnerPadre'>
        <div className='divSpinnerHijo'>
          <Spinner color='dark' className='spinnerCarga'/> 
        </div>
      </div>}</div>
      <div>{error && 'Hubo un error al cartar el catalogo'}</div>
      <div>{result && <>

      
     <ItemList result= {result} 
              /> </>}</div>
    </>
  )
}
