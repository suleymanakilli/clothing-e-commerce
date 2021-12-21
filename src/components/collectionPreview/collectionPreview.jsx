import React from 'react'
import { useNavigate } from "react-router-dom";
import CollectionItem from '../collectionItem/collectionItem'
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './collectionPreviewStyle'

export default function CollectionPreview({ title, items }) {
    let navigate = useNavigate();
    return (
        <CollectionPreviewContainer >
            <TitleContainer onClick={() => navigate(title.toLowerCase())}>{title.toUpperCase()}</TitleContainer >
            <PreviewContainer >
                {items.filter((item, idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}
