import React from 'react'
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';
import CollectionItem from '../../components/collectionItem/collectionItem'
import './collectionPage.scss'


function CollectionPage({ collection }) {
    return (
        <div className="collection-page">
            <h2 className="title">{collection?.title}</h2>
            <div className="items">
                {collection?.items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    collection: selectCollection(window.location.pathname.slice(6))(state)
})
export default connect(mapStateToProps)(CollectionPage)