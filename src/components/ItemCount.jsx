import React from 'react'
import { useState,useEffect,useContext } from 'react';
import { Context } from '../Context/CartContext';

export default function ItemCount({ initial,stock }) {
let{addOn,cart} =useContext(Context)
const [ItemCount, ItemCountSet] = useState(initial)
  
    useEffect(() => {
      console.log("render")
    
    }, [ItemCount])

    useEffect(() => {
      console.log("render cart")
    
    }, [cart])
  

    
    return (
    <>
        <div>
          <button onClick={() =>{
                    ItemCount > initial ? ItemCountSet(ItemCount - 1) : ItemCountSet(ItemCount);
                                }}
        >-</button><span class='p-5'>{ItemCount}</span>
        <button onClick={() =>{
                    ItemCount < stock ? ItemCountSet(ItemCount + 1) : ItemCountSet(ItemCount);
                                 }}
            >+</button><br />
            <button onClick={()=> { 
              ItemCount == 0 ? alert("No estas agregando nada al carrito") :
              cart.length >= 10? alert("Son demasiados productos"): addOn(ItemCount)}} class="px-5" >Agregar al carrito</button>

        </div>

    </>)
}
