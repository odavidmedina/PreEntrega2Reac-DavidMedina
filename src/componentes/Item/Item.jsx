import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ e }) => {
    return (
        <div className='item'>
            <h2>{e.nombre}</h2>
            <img src={e.img} alt={e.nombre} className='item-img' />
            <p>${e.precio}</p>
            <Link to={`/detalle/${e.id}`} className='item-link'>
                Ver Detalle
            </Link>
        </div>
    )
}

export default Item
