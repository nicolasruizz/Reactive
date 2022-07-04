import React from 'react'
import logo from '../images/logo.jpeg'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import CategoriesNav from './CategoriesNav'
import './NavBar.css'

//BARRA DE NAVEGACIÓN

export default function NavBar(){
    return( <>
        <div className='text-center my-2 text-white transparent'><span> Envios gratis a partir de los $6000 // Hasta 6 cuotas sin interes con todas las tarjetas </span></div>
        <nav className="navbar navbar-expand-lg navbar-dark  transparent">
        <Link to="/" className='nav.link' style={{ textDecoration: 'none' }}> <img src={logo} className='rounded-circle' width="30" height="30" alt="Logo"></img></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto </Link>
            </li>
            <li><Link className="nav-link" to="/productos">Todos los productos</Link></li>
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle drop" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Categorias </a>
            <ul className="dropdown-menu bg-dark" aria-labelledby="offcanvasNavbarDropdown">
              <CategoriesNav />
            </ul>
            </li>
              </ul>
              <li className=' ml-5 pl-5'>
              <Link to="/home" className='nav.link' style={{ textDecoration: 'none' }}>
              <span className='text-white nav-item'>Andre the store</span>
              </Link>
              </li>
        </div>
        <CartWidget></CartWidget>
      </nav>
      
      </>
)}
