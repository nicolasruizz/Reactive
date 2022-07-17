import { useContext } from 'react'
import {useState} from 'react'
import { Context } from '../../Context/CartContext'
import ItemCount from './ItemCount'
import Swal from 'sweetalert2'  
import './ItemDetail.css'

export default function ItemDetail({item}) {
const [img, setImg] = useState(item.img)
const [qty, qtySet] = useState(1)
const {isInCart, addItem} = useContext(Context)

const onAdd =() =>{
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: qty === 1 ? `Agregaste ${qty} producto al carrito ` : `Agregaste ${qty} productos al carrito `,
  showConfirmButton: false,
  timer: 1500
})
  isInCart(item.id)
  addItem(item,qty)
}

//Como se muestra el detalle 

  return (<>
    <div className="row mx-auto p-3 bg-ligth text-white rounded w-75 ">
      <ul>
        <button type="button" onClick={()=>{ setImg(item.img)}}>
            <img src={item.img} width="60" height="60" className='padding' alt={item.name}></img>
        </button>
        <button type="button" onClick={()=>{ setImg(item.img2)}}>
            <img src={item.img2} width="60" height="60" alt={item.name}></img>
        </button>
        </ul>
      <div className='border-rounded col-sm-12 col-md-10 col-lg-10 col-xl-5 mr-4 card row'>
        <img className='card-img' src={img} alt={item.name}></img>
        </div>
      <div className='col-sm-12 col-md-10 col-lg-10 row  col-xl-5 d-flex justify-content-center '>
        <ul className='listD my-5 col-12'>
        <li className='h6'><strong>Nombre:</strong> <i> {item.name}</i></li>
        <li className='h6' ><strong>Precio:</strong> <i> ${item.price}</i></li>
        <li className='h6'><strong>Detalle:</strong> <i> {item.detail}</i></li>
        <li className='h6'><strong>stock:</strong> <i> {item.stock}</i></li>
        <hr className='border-white'/>
        <span className='col-8'><i> Tambien lo tenes hasta 6 cuotas de SIN INTERES de ${parseInt(item.price/6)}</i></span>
        </ul>
        <hr className='lineWhithe'/>

        <div>
        <ItemCount itemCount={qty} itemCountSet={qtySet} onAdd={onAdd} stock={item.stock} /> 
         
        
      </div>
        </div>
        
        
        


          </div>
          </>
  )
}
