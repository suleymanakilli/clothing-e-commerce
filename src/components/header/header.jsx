import React from 'react'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cartIcon/cartIcon';
import CartDropdown from '../cartDropdown/cartDropdown';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelectors'
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './headerStyle';
import { signOutStart } from '../../redux/user/userActions';


function Header({ currentUser, hidden, signOutStart }) {

    let navigate = useNavigate();
    return (
        <HeaderContainer>
            <LogoContainer onClick={() => navigate("/")}>
                <Logo />
            </LogoContainer >
            <OptionsContainer >
                <OptionLink onClick={() => navigate("/shop")}>
                    SHOP
                </OptionLink >
                <OptionLink onClick={() => navigate("/contact")}>
                    CONTACT
                </OptionLink >
                {currentUser ? <OptionLink onClick={signOutStart}>SIGN OUT</OptionLink > :
                    <OptionLink onClick={() => navigate("/signin")}>SIGN IN</OptionLink >}
                <CartIcon />

            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);