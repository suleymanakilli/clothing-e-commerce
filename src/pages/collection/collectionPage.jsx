import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';
import CollectionItem from '../../components/collectionItem/collectionItem'
import './collectionPage.scss'


var collectionId;
function CollectionPage({ collection }) {

    console.log(collection)
    let params = useParams();
    useEffect(() => {
        collectionId = params.collectionId
    }, [params.collectionId])
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
    collection: selectCollection(collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage)