import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContex';
import './CartPage.css';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    const handleQuantityChange = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateQuantity(productId, quantity);
        }
    };

    return (
        <div className='cart-page'>
            <h1>Carrito de Compras</h1>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div className='cart-items'>
                    {cart.map((product) => (
                        <div key={product.id} className='cart-item'>
                            <h2>{product.nombre}</h2>
                            <img src={product.img} alt={product.nombre} className='cart-item-img' />
                            <p>${product.precio}</p>
                            <div className='quantity-controls'>
                                <button onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>-</button>
                                <span>{product.quantity}</span>
                                <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
                            </div>
                            <button onClick={() => handleRemove(product.id)}>Eliminar</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartPage;
