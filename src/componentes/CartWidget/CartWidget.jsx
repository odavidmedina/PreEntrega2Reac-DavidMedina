import React from 'react'
import { CiShoppingCart, CiBellOn } from "react-icons/ci"
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <CiBellOn />
            <span>0</span>
            <CiShoppingCart />
        </div>
    )
}

export default CartWidget
