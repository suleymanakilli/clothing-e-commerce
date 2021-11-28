import React from 'react';
import {
    useNavigate,
    //Link 
} from "react-router-dom";
import './menuItem.scss';

function MenuItem({ title, imageUrl, size, linkUrl }) {
    let navigate = useNavigate();
    return (
        <div className={size ? `large menu-item` : 'menu-item'} onClick={() => navigate(linkUrl, { state: { stateStatus: "State çalıştı" } })}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content' >
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle' >SHOP NOW</span>
            </div>
        </div >
    )
}

export default MenuItem;