import React from 'react'
import SignIn from '../../components/signIn/signIn'
import SignUp from '../../components/signUp/signUp'
import { SignInAndSignUpContainer } from './signInAndUpStyle'
export default function SignInAndUpPage() {
    return (
        <SignInAndSignUpContainer >
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
    )
}
