import React from 'react'
import { connect } from 'react-redux'
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton } from './cartDropdownStyle'
import CartItem from '../cartItem/cartItem'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { createStructuredSelector } from 'reselect'
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from '../../redux/cart/cartAction'
function CartDropdown({ cartItems, dispatch }) {
    let navigate = useNavigate();
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length ? (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)) :
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>}

            </CartItemsContainer>
            <CartDropdownButton onClick={() => {
                navigate('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)