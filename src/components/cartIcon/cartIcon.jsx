import React from 'react'
import { toggleCartHidden } from '../../redux/cart/cartAction'
import { selectCartItemsCount } from '../../redux/cart/cartSelectors'
import { CartContainer, ItemCountContainer, ShoppingIcon } from './cartIconStyle'
import { useSelector, useDispatch } from 'react-redux'


//redux hooks useSelector and useDispatch
export default function CartIcon() {
    const itemCount = useSelector(state => selectCartItemsCount(state))
    const dispatch = useDispatch()
    const dispatchCartHidden = () => dispatch(toggleCartHidden())
    return (
        <CartContainer onClick={dispatchCartHidden}>
            <ShoppingIcon />
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartContainer >
    )
}

/*const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(CartIcon)*/