import React from 'react'
import SignIn from '../../components/signIn/signIn'
import SignUp from '../../components/signUp/signUp'
import './signInAndOut.scss'
export default function SignInAndOut() {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}
