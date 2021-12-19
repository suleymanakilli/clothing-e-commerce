import React, { useEffect } from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../../components/collectionOverview/collectionsOverviewContainer';
import CollectionPageContainer from '../collection/collectionPageContainer';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';


const ShopPage = ({ fetchCollectionsStart }) => {
    useEffect(() => {
        fetchCollectionsStart()
        // eslint-disable-next-line
    }, [])
    return (
        <div className="shop-page">
            <Routes>
                <Route
                    exact path={`/`}
                    element={<CollectionsOverviewContainer />}
                /*Container Pattern kullanma sebebimiz isLoading gibi işlemlerin 
                buradaki mapstatetoprops kısmını çokça doldurması ve biz shop page
                 içinde yapılmamasını olabildiğince buranın sade kalmasını istememizden */
                />
                <Route path={`:collectionId`} element={<CollectionPageContainer />} />

            </Routes>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);