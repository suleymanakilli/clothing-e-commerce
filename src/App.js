import React, { useEffect } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage/homePage';
import HatsPage from './pages/hatsPage/hatsPage';
import ShopPage from './pages/shopPage/shopPage';
import Header from './components/header/header';
import SignInAndOut from './pages/signInAndOut/signInAndOut';
import { auth, createUserProfileDocument } from './firebase/firebase'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions'
function App(props) {
  const { setCurrentUser } = props
  useEffect(() => {
    var unSubscribeFromAuth = null

    unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      else {
        setCurrentUser(userAuth)
      }

    })
    return () => unSubscribeFromAuth()
  }, [setCurrentUser])


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/hats"
          element={<HatsPage />}
        />
        <Route
          path="/shop"
          element={<ShopPage />}
        />
        <Route
          path="/signin"
          element={<SignInAndOut />}
        />

      </Routes>

    </div>
  );
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
