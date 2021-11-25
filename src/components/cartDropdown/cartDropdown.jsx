import React from 'react'

import './cartDropdown.scss'

import CustomButton from '../customButton/customButton'

export default function CartDropdown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
