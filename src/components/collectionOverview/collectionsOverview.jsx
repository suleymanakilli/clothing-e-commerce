import React from 'react'
import './collectionsOverview.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsAsArray } from '../../redux/shop/shopSelector'
import CollectionPreview from '../collectionPreview/collectionPreview'
function CollectionsOverview({ collections }) {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsAsArray
})
export default connect(mapStateToProps)(CollectionsOverview)
