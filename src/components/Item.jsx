import React, {useEffect} from 'react'

export default function Item() {
    useEffect(() => {
        console.log("render de item")

    }, [])
    
    
  return (
    <button >Mostrar mas detalles</button>
  )
}
