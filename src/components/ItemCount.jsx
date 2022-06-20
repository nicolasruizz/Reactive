import React from 'react'
import { useEffect,useContext } from 'react';
import { Context } from '../Context/CartContext';
import { Link } from 'react-router-dom'

export default function ItemCount({itemCount,itemCountSet,onAdd}) {
let {cart} =useContext(Context)

  

    useEffect(() => {
    
    }, [cart])
  

  //ITEM PARA CONTABILIZAR
    return (
    <>
        <div className='p-3'>
          <button  onClick={() =>{
                    itemCount > 0 ? itemCountSet(itemCount - 1) : itemCountSet(itemCount);
                                }}
        >-</button><span className='p-5'>{itemCount}</span>
        <button onClick={() =>{
                    itemCount < 4 ? itemCountSet(itemCount + 1) : itemCountSet(itemCount);
                                 }}
            >+</button><br />
            <button onClick={()=> { 
              itemCount == 0 ? alert("No estas agregando nada al carrito") :
              cart.length >= 10? alert("Son demasiados productos"): onAdd()}} className="px-5" >Agregar</button>

            {cart.length >= 1 && <Link to="/cart" onClick={() => {<Link to="/cart"></Link>}}><button className='px-5'> Finalizar Compra</button></Link>}
        </div>

    </>)
}
