import {useState,useEffect} from 'react'
import {getDocs,getFirestore,collection} from 'firebase/firestore'
import { Link } from 'react-router-dom'
export default function CategoriesNav() {
const [category, categorySet] = useState([])

useEffect(() => {
    const db = getFirestore();
    const categoriesList = collection(db,'categories');
    getDocs(categoriesList).
    then(snapshot =>{
        console.log(snapshot)
        categorySet(snapshot.docs.map((doc)=> doc.data().name))})
        .finally(()=>{
            ;
            })
    

}, [])


  return (
    <>
    {category.map(item =>(
        <li  key={item}>
            <Link className="nav-link" to={"/category/" + item}>
                {item}
            </Link>
        </li>
    ))}
    </>
  )
}
