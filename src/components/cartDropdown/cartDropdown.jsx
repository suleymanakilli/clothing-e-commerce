import React from 'react'
import { connect } from 'react-redux'
import './cartDropdown.scss'
import CartItem from '../cartItem/cartItem'
import CustomButton from '../customButton/customButton'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { createStructuredSelector } from 'reselect'
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from '../../redux/cart/cartAction'
function CartDropdown({ cartItems, dispatch }) {
    let navigate = useNavigate();
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)) : <span className="empty-message">Your cart is empty</span>}

            </div>
            <CustomButton onClick={() => {
                navigate('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)