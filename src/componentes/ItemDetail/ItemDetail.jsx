import React, { useContext } from 'react';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContex';

const ItemDetail = ({ producto }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(producto);
    };

    return (
        <div className='item-detail'>
            <h2>{producto.nombre}</h2>
            <img src={producto.img} alt={producto.nombre} className='item-detail-img' />
            <p>Precio: ${producto.precio}</p>
            <p>Descripción: {producto.descripcion}</p>
            <p>Stock: {producto.stock}</p>
            <button onClick={handleAddToCart}>Comprar</button>
        </div>
    )
}

export default ItemDetail;
