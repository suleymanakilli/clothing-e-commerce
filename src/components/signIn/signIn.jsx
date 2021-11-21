import React, { Component } from 'react'
import CustomButton from '../customButton/customButton'
import FormInput from '../formInput/formInput'
import './signIn.scss'
import { signInWithGoogle } from '../../firebase/firebase'
export default class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault()
        this.state({ email: "", password: "" })
    }
    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
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
                    <div className="buttons">
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
