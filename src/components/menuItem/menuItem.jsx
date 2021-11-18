import React from 'react';
import { useNavigate } from "react-router-dom";
import './menuItem.scss';

function MenuItem({ title, imageUrl, size }) {
    let navigate = useNavigate();
    return (
        <div className={size ? `large menu-item` : 'menu-item'}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle' onClick={() => navigate("hats")}>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;