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

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
    //!! dememizin sebebi değerleri true veya false'a çevirmek için.
    //Örn: !!0 false   !!null false    !!{} true
)
