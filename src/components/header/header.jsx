import React from 'react'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.scss'
import CartIcon from '../cartIcon/cartIcon';
import CartDropdown from '../cartDropdown/cartDropdown';
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelectors'


function Header({ currentUser, hidden }) {

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
                <CartIcon />

            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

});

export default connect(mapStateToProps)(Header);