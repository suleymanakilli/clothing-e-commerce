import React, { Component } from 'react'
import CustomButton from '../customButton/customButton'
import FormInput from '../formInput/formInput'
import { auth, signInWithGoogle } from '../../firebase/firebase'
import { ButtonsBarContainer, SignInContainer, SignInTitle } from './signInStyle'
export default class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: "", password: "" })
        } catch (error) {
            console.log(error)
        }
    }
    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }
    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        value={this.state.email}
                        type="email"
                        handleChange={this.handleChange}
                        label="email"
                        required />
                    <FormInput
                        name="password"
                        value={this.state.password}
                        type="password"
                        handleChange={this.handleChange}
                        label="password"
                        required />
                    <ButtonsBarContainer>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </ButtonsBarContainer>

                </form>
            </SignInContainer>
        )
    }
}
