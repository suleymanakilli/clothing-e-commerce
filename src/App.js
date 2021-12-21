import React, { useEffect } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage/shopPage';
import Header from './components/header/header';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelectors';
import { Navigate } from 'react-router-dom';
import CheckoutPage from './pages/checkoutPage/checkoutPage';
import SignInAndUp from './pages/signInAndUp/signInAndUp';
import { checkUserSession } from './redux/user/userActions'
import { GlobalStyle } from './globalStyles'
import ContactPage from './pages/contactPage/contactPage';
function App({ checkUserSession, ...otherProps }) {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/shop/*"
          element={<ShopPage />}
        />
        <Route
          exact path="/signin"
          element={otherProps.currentUser !== null ? <Navigate to="/" /> : <SignInAndUp />}
        />
        <Route
          exact path="/checkout"
          element={<CheckoutPage />}
        />
        <Route
          exact path="/contact"
          element={<ContactPage />}
        />

      </Routes>

    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
