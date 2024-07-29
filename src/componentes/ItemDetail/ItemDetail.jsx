import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {
    return (
        <div className='item-detail'>
            <h2>{producto.nombre}</h2>
            <img src={producto.img} alt={producto.nombre} className='item-detail-img' />
            <p>Precio: ${producto.precio}</p>
            <p>Descripción: {producto.descripcion}</p>
            <p>Stock: {producto.stock}</p>
        </div>
    )
}

export default ItemDetail
