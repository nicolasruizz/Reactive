import React from 'react'

export default function ItemDetail({item}) {

  return (<>
    <div className="row conteiner-fluid">
      <div className='card imagen col-sm-12 col-lg-5'><img src={item.img}></img></div>
      <div className='col-sm-12 col-lg-5'>
        <span><strong>Nombre:</strong><i>{item.name}</i></span>
        <span><strong>Precio:</strong><i>{item.price}</i></span>
        <span><strong>Detalle:</strong><i>{item.detalle}</i></span>

      </div>
      <div></div>

          </div>
          </>
  )
}
