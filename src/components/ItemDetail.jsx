import { useContext } from 'react'
import {useState} from 'react'
import { Context } from '../Context/CartContext'
import ItemCount from './ItemCount'

export default function ItemDetail({item}) {
const [img, setImg] = useState(item.img)
const [qty, qtySet] = useState(0)
const {isInCart, addItem} = useContext(Context)

const onAdd =() =>{
  alert("Agregaste "+ qty +" productos")
  console.log(item.id)
  isInCart(item.id)
  console.log(isInCart(item.id))
  addItem(item,qty)
}

//Como se muestra el detalle 

  return (<>
    <div className="row conteiner-fluid mx-auto w-75 p-3 bg-dark text-white my-1 rounded">
      <ul className='d-inline'>
        <button type="button" onClick={()=>{ setImg(item.img)}}>
            <img src={item.img} width="60" height="60" alt=""></img>
        </button>
        <button type="button" onClick={()=>{ setImg(item.img2)}}>
            <img src={item.img2} width="60" height="60" alt=""></img>
        </button>
        </ul>
      <div className='card col-sm-12 col-lg-5'><img src={img}></img></div>
      <div className='col-sm-12 col-lg-5 row'>

        <span className='col-sm-10 col-md-7 col-lg-8'><strong>Nombre:</strong> <i> {item.name}</i></span>
        <span className='col-sm-10 col-md-7 col-lg-8'><strong>Precio:</strong> <i> ${item.price}</i></span>
        <span className='col-sm-10 col-md-7 col-lg-8'><strong>Detalle:</strong> <i> {item.detail}</i></span>
        <span className='col-sm-10 col-md-7 col-lg-8'><strong>stock:</strong> <i> {item.stock}</i></span>
        
        <div>
        <ItemCount itemCount={qty} itemCountSet={qtySet} onAdd={onAdd} stock={item.stock} />  
      </div>
      <span className='col-8'><i> Tambien lo tenes hasta 6 cuotas de SIN INTERES de ${parseInt(item.price/6)}</i></span>


      </div>


          </div>
          </>
  )
}
