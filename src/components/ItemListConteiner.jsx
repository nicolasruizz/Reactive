import React from 'react'

export default function ItemListConteiner({lista, saludar}) {
  return (
      <>
      {lista.map(item => (<div onClick={()=>saludar()} class="my-5  p-5">{item}</div>))}
      </>
    
  )
}
