import React from 'react'
import { Link } from 'react-router-dom'
import index from '../../images/index.jpg'
import './HomeViewer.css'

//Index de la web

export default function HomeViewer() {

  return (
    <div className="card bg-dark text-white h-50">
  <img className="card-img" src={index} alt="Home"></img>
  <div className="middle">
  <Link to="/productos" style={{ textDecoration: 'none' }} ><button type='button' className='btn btn1 rounded'>Ir a productos</button></Link>
  </div>
</div>

)
}
