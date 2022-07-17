import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/CartContext';

export default function ItemCount({itemCount,itemCountSet,onAdd,stock}) {
let {cart, error} =useContext(Context)

  

  //ITEM PARA CONTABILIZAR
    return (
    <>
        <div className='col-12 row mx-2'>
          <h4 className='h4'>Selecciona cuantos quieres</h4>
          <div className='col-12 my-2'>
            <div className=' '>
          <button className='btn-ligth btn-sm px-3 py-1  ' onClick={() =>{
                    itemCount > 0 ? itemCountSet(itemCount - 1) : itemCountSet(itemCount);
                                }}
        >-</button>
        <button className='btn-ligth btn-sm px-3'  onClick={() =>{
                    itemCount < stock ? itemCountSet(itemCount + 1) : itemCountSet(itemCount);
                                 }}>+</button>
                                 <strong className='text-center mt-1 ml-4   '> {itemCount} </strong>  
            </div>
            </div>
            <div className='col-10 d-flex justify-content-center'>
            <button onClick={()=> { 
              itemCount === 0 ? error() :
               onAdd()}} className="px-3  btn-ligth btn-sm" >Agregar </button>
               <hr />

            {cart.length >= 1 && <Link to="/cart" onClick={() => {<Link to="/cart"></Link>}}><button className='px-4   btn-ligth btn-lg'> Finalizar Compra</button></Link>}
            </div>
            <hr />
        </div>

    </>)
}
