import { createSelector } from "reselect";


const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)
export const selectCollectionsAsArray = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : [] //Object.values(collections) diyerek aynı sonucu elde edebilirdik
    //Ama bu şekilde yazarsak propertyleri kontrol etmesi daha kolay
)
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
)
