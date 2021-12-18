import React, { useState, useEffect } from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';
import CollectionsOverview from '../../components/collectionOverview/collectionsOverview'
import CollectionPage from '../collection/collectionPage'
import WithSpinner from '../../components/withSpinner/withSpinner';


import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../../firebase/firebase'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ updateCollections, ...otherProps }) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const collectionRef = firestore.collection('collections')
        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            setLoading(false)
        });
    }, [updateCollections])
    return (
        <div className="shop-page">
            <Routes>
                <Route
                    exact path={`/`}
                    element={<CollectionsOverviewWithSpinner isLoading={loading} {...otherProps} />}
                />
                <Route path={`:collectionId`} element={<CollectionPageWithSpinner isLoading={loading} {...otherProps} />} />

            </Routes>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) =>
        dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);