
import React from 'react'
import Item from './Item'
import ItemCount from './ItemCount'


export default function ItemList({ result }) {
  return (<>
  <div class="row">
    {result.map(item =>
        (<>  
              <div class="card text-center col-2">
            <img src={item.img} class="card-img-top" alt="..."></img>
            <div class="card-body">
            <p class="card-text h2">Precio: {item.price}</p>
            </div>
            <p class='card-text h6'>{item.detalle}</p>

            <Item />
            <ItemCount
              initial ={0}
              stock={3}
              />
            </div>
            
        </>))}
        </div>
    
    </>
  )
}
