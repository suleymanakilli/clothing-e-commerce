import React, { useEffect } from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../../components/collectionOverview/collectionsOverviewContainer';
import CollectionPageContainer from '../collection/collectionPageContainer';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';


const ShopPage = ({ updateCollections, isCollectionsLoaded, ...otherProps }) => {
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
                    element={<CollectionsOverviewContainer />}/*Başına ünlem koymamızın sebebi
                    collections eğer null ise !!null false döndürecek. Ama eğer collection null ise spinnerın çalışmasını istiyoruz.
                    Spinner ise sadece isLoading true olduğunda çalışacak
                    */
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
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);