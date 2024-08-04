import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className='logo'>
            <h1>Mi Tienda</h1>
            </Link>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/categoria/tecno">Tecno</Link></li>
                <li><Link to="/categoria/ropa">Ropa</Link></li>
                <li><Link to="/categoria/accesorios">Accesorios</Link></li>
            </ul>
           <Link to="/cart" ><CartWidget /></Link> 
        </nav>
    )
}

export default NavBar
