import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //Local storage
//sessionStorage ile sessionStorage kullanabilirdik
import userReducer from "./user/userReducer";
import cartReducer from './cart/cartReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] //Sadece cartlisti ekle. (User firebase auth tarafından tutuluyor. Bizim tutmamıza gerek yok)
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)