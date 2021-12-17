import React from 'react';
import {
    useNavigate
} from "react-router-dom";
import { BackgroundImageContainer, ContentContainer, ContentSubtitle, ContentTitle, MenuItemContainer } from './menuItemStyle';

function MenuItem({ title, imageUrl, size, linkUrl }) {
    let navigate = useNavigate();
    return (
        <MenuItemContainer onClick={() => navigate(linkUrl, { state: { stateStatus: "State çalıştı" } })}>
            <BackgroundImageContainer
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <ContentContainer className='content' >
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer >
        </MenuItemContainer >
    )
}

export default MenuItem;