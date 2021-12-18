import React, { useEffect } from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collectionOverview/collectionsOverview'
import CollectionPage from '../collection/collectionPage'
import WithSpinner from '../../components/withSpinner/withSpinner';

import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';
import { selectIsCollectionFetching } from '../../redux/shop/shopSelector';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ updateCollections, ...otherProps }) => {
    const { isCollectionFetching } = otherProps
    useEffect(() => {
        const { fetchCollectionsStartAsync } = otherProps
        fetchCollectionsStartAsync()
        // eslint-disable-next-line
    }, [])
    return (
        <div className="shop-page">
            <Routes>
                <Route
                    exact path={`/`}
                    element={<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...otherProps} />}
                />
                <Route path={`:collectionId`} element={<CollectionPageWithSpinner isLoading={isCollectionFetching} {...otherProps} />} />

            </Routes>
        </div>
    )
}

/*const mapStateToProps = state => ({
    isCollectionFetching: selectIsCollectionFetching(state)
})
yerine createStructuredSelector kullanıyoruz.
*/
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
})
const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);