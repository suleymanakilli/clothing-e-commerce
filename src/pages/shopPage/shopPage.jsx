import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import CollectionsOverview from '../../components/collectionOverview/collectionsOverview'
import CollectionPage from '../collection/collectionPage'
const ShopPage = () => {

    return (
        <div className="shop-page">
            <Routes>
                <Route
                    exact path={`/`}
                    element={<CollectionsOverview />}
                />
                <Route path={`:collectionId`} element={<CollectionPage />} />

            </Routes>
        </div>
    )
}
export default ShopPage