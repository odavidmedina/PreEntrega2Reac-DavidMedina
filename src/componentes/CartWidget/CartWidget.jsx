import React, { useContext } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import './CartWidget.css';
import { CartContext } from '../../context/CartContex';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className='cart-widget'>
            <Link to="/cart">
                <span>{totalItems}</span>
                <CiShoppingCart />
            </Link>
        </div>
    );
};

export default CartWidget;
