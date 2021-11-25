import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyB6KERkYZYusEyz7Ahw6La6s7FlXDwfGv0",
    authDomain: "crwn-db-d65e7.firebaseapp.com",
    projectId: "crwn-db-d65e7",
    storageBucket: "crwn-db-d65e7.appspot.com",
    messagingSenderId: "986684133970",
    appId: "1:986684133970:web:2ef03d3001a075fe67c58b",
    measurementId: "G-XVKJ3W7G6M"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;