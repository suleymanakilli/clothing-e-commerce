//Bunu yazma sebebimiz alakasız state değiştiğinde render yapılmasın. Çünkü her state değiştiğinde aslında 
//yeni bir obje geldiğinden rerender ediliyor. Bunu reselect
//kütüphanesini kullanarak (memoization kullanıyor) çözebiliyoruz
//Quantity integer yani primitive tip olduğundan bu örnek için yazmamıza gerek yok.
//Referans tipler için bunu yazmalıyız
import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
                accumalatedQuantity + cartItem.quantity,
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
                accumalatedQuantity + cartItem.quantity * cartItem.price,
            0
        )
)