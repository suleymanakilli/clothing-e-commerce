import React from 'react'
import CollectionItem from '../collectionItem/collectionItem'
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './collectionPreviewStyle'
export default function CollectionPreview({ title, items }) {

    return (
        <CollectionPreviewContainer >
            <TitleContainer  >{title.toUpperCase()}</TitleContainer >
            <PreviewContainer >
                {items.filter((item, idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}
