import React from 'react'
import logo from '../images/logo.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


export default function NavBar(){
    return( <>
        <div className='text-center bg-dark my-2 text-white'><span> Envios gratis a partir de los $6000 // Hasta 6 cuotas sin interes con todas las tarjetas </span></div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className='nav.link' style={{ textDecoration: 'none' }}> <img src={logo}  width="30" height="30" alt="Logo"></img><span className=' text-white '> TheAndreStore</span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Dospartes">En Dos Partes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Entera">Enteras</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto </Link>
            </li>
          </ul>
        </div>
        <CartWidget></CartWidget>
      </nav>
      
      </>
)}
