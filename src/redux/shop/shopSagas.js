import { takeLatest, call, put, all } from 'redux-saga/effects'
import ShopActionTypes from './shopTypes'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase'
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shopActions'

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
    //Alttaki fonksiyonla aynı işlevi görüyor. Ama saga kullanarak yazmış olduk. Test etmesi daha kolay olmuş oldu.
    // collectionRef.get().then((snapshot) => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap))
    // }).catch(err => dispatch(fetchCollectionsFailure(err.message)));

}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
    //3 tane arka arkaya istek atıldı diyelim. En sonuncusu en güncel veri olacağından
    //Bu örnek için takeLatest kullanmak en mantıklısı
}


export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}
