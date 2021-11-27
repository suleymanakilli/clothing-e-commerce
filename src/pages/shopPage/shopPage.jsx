import React from 'react'
import CollectionPreview from '../../components/collectionPreview/collectionPreview'
import { selectCollections } from '../../redux/shop/shopSelector'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
const ShopPage = () => {
    const { collections } = this.state.collections
    return (
        <div className="shop-page">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})


export default connect(mapStateToProps)(ShopPage)