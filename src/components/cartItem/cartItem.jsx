import React from 'react'
import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cartItemStyle'
function CartItem({ item: { imageUrl, price, name, quantity } }) {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt="item" />
            <ItemDetailsContainer>
                <span>{name}</span>
                <span>{quantity}*${price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}
export default React.memo(CartItem)
