import React from 'react'
import { useState,useEffect,useContext } from 'react';
import { Context } from '../Context/CartContext';

export default function ItemCount() {
let{addOn,cart} =useContext(Context)
const [ItemCount, ItemCountSet] = useState(0)
  
    useEffect(() => {
    
    }, [ItemCount])

    useEffect(() => {
    
    }, [cart])
  

  //ITEM PARA CONTABILIZAR
    return (
    <>
        <div className='p-3'>
          <button  onClick={() =>{
                    ItemCount > 0 ? ItemCountSet(ItemCount - 1) : ItemCountSet(ItemCount);
                                }}
        >-</button><span className='p-5'>{ItemCount}</span>
        <button onClick={() =>{
                    ItemCount < 4 ? ItemCountSet(ItemCount + 1) : ItemCountSet(ItemCount);
                                 }}
            >+</button><br />
            <button onClick={()=> { 
              ItemCount == 0 ? alert("No estas agregando nada al carrito") :
              cart.length >= 10? alert("Son demasiados productos"): addOn(ItemCount)}} className="px-5" >Agregar</button>

        </div>

    </>)
}
