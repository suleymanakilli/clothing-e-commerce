import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkoutItem/checkoutItem'
import StripeButton from '../../components/stripeButton/stripeButton'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { selectCartTotal } from '../../redux/cart/cartSelectors'
import { CheckoutHeaderContainer, CheckoutPageContainer, HeaderBlockContainer, TotalContainer, WarningContainer } from './checkoutPageStyle'
function CheckoutPage({ cartItems, total }) {
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
            <TotalContainer><span>TOTAL : ${total}</span></TotalContainer>
            <WarningContainer>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/29 - CVV: 123
            </WarningContainer>
            <StripeButton price={total} />
        </CheckoutPageContainer>
    )
}
/*const mapStateToProps = state => ({
    cartItems: cartItems(state),
    total:selectCartTotal(state)
})
yerine createStructuredSelector kullanıyoruz.
*/
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage)