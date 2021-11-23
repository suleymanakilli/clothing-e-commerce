import React from 'react'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.scss'
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
function Header({ currentUser }) {

    let navigate = useNavigate();
    return (
        <div className="header">
            <div className="logo-container" onClick={() => navigate("/")}>
                <Logo className="logo" />
            </div>
            <div className="options" >
                <div className="option" onClick={() => navigate("/shop")}>
                    SHOP
                </div>
                <div className="option" onClick={() => navigate("/contact")}>
                    CONTACT
                </div>
                {currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <div className="option" onClick={() => navigate("/signin")}>SIGN IN</div>}
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);