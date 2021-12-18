import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsAsArray } from '../../redux/shop/shopSelector'
import CollectionPreview from '../collectionPreview/collectionPreview'
import { CollectionsOverviewContainer } from './collectionsOverviewStyle'
function CollectionsOverview({ collections, ...otherProps }) {
    return (
        <CollectionsOverviewContainer>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </CollectionsOverviewContainer>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsAsArray
})
export default connect(mapStateToProps)(CollectionsOverview)
