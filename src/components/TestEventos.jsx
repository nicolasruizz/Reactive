import React from 'react'

export default function TestEventos() {


function keyBlockInput(e){
    console.log(e)
   if(e.keyCode === 65 || e.keyCode ===  69 || e.keyCode === 73|| e.keyCode === 79 || e.keyCode === 85)
   e.preventDefault()

}

  return (<>
    <input type="text" placeholder='Nombre' onKeyDown={(e)=>keyBlockInput(e)}></input>
    </>
  )
}
