import { put, all, call, takeLatest } from 'redux-saga/effects'

import { UserActionTypes } from '../user/userTypes'
import { clearCart } from './cartAction'


export function* clearCartOnSignout() {
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignout)
}

export function* cartSagas() {
    yield (all([
        call(onSignOutSuccess)
    ]))
}