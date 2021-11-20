import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.scss'
import {useNavigate} from "react-router-dom";
export default function Header() {
    let navigate = useNavigate();
    return (
        <div className="header">
            <div className="logo-container" onClick={() => navigate("/")}>
                <Logo className="logo"/>
            </div>
            <div className="options" >
                <div className="option" onClick={() => navigate("/shop")}>
                    SHOP
                </div>
                <div className="option" onClick={() => navigate("/contact")}>
                    CONTACT
                </div>
            </div>
        </div>
    )
}
