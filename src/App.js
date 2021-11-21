import React, { useEffect, useState } from 'react';
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
function App() {
  const [currentUser, setCurrentUser] = useState(null)

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
        setCurrentUser(null)
      }

    })
    return () => unSubscribeFromAuth()
  }, [])
  useEffect(() => {
    console.log(currentUser)
  }, [currentUser])

  return (
    <div>
      <Header currentUser={currentUser} />
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

export default App;
