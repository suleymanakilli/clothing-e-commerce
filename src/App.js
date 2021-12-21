import React, { useEffect, lazy, Suspense } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Header from './components/header/header';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelectors';
import { Navigate } from 'react-router-dom';
import { checkUserSession } from './redux/user/userActions'
import { GlobalStyle } from './globalStyles'
import Spinner from './components/spinner/spinner';

const HomePage = lazy(() => import('./pages/homePage/homePage.jsx'))
const ShopPage = lazy(() => import('./pages/shopPage/shopPage'))
const CheckoutPage = lazy(() => import('./pages/checkoutPage/checkoutPage'))
const SignInAndUpPage = lazy(() => import('./pages/signInAndUpPage/signInAndUpPage'))
const ContactPage = lazy(() => import('./pages/contactPage/contactPage'))


function App({ checkUserSession, ...otherProps }) {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/shop/*"
            element={<ShopPage />}
          />
          <Route
            exact path="/signin"
            element={otherProps.currentUser !== null ? <Navigate to="/" /> : <SignInAndUpPage />}
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
      </Suspense>
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
