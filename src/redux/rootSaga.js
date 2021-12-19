import { all, call } from "redux-saga/effects";

import { cartSagas } from "./cart/cartSagas";
import { shopSagas } from "./shop/shopSagas";
import { userSagas } from "./user/userSagas";

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(cartSagas),
        call(shopSagas)
    ])
    //all kullanmamızın sebebi:
    // yield fetchCollectionsStart()
    // yield fetchCollectionsStart()
    //Üstteki iki fonksiyon aynı anda çalışmayacak. Alttaki üsttekinin bitmesini bekleyecek. 
    //Biz paralel çalışmasını istiyoruz bu yüzden all kullandık
}