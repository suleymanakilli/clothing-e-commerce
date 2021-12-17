import React from 'react'
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';
import CollectionItem from '../../components/collectionItem/collectionItem'
import { CollectionItemsContainer, CollectionPageContainer, CollectionTitle } from './collectionPageStyle';


function CollectionPage({ collection }) {
    const { title, items } = collection
    return (
        <CollectionPageContainer>
            <CollectionTitle >{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state) => ({
    collection: selectCollection(window.location.pathname.slice(6))(state)
})
export default connect(mapStateToProps)(CollectionPage)