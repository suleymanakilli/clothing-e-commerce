import React from 'react'
import { connect } from 'react-redux'
import './cartDropdown.scss'
import CartItem from '../cartItem/cartItem'
import CustomButton from '../customButton/customButton'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { createStructuredSelector } from 'reselect'
function CartDropdown({ cartItems }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)