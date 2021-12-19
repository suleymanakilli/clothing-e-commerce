import React, { Component } from 'react'
import CustomButton from '../customButton/customButton'
import FormInput from '../formInput/formInput'
import { SignUpContainer, SignUpTitle } from './signUpStyle'
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/userActions'
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state
        const { signUpStart } = this.props;
        if (password !== confirmPassword) {
            alert("passwords don't match")
            return
        }


        signUpStart({ displayName, email, password });

    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <SignUpContainer >
                <SignUpTitle>I do not have an account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required />
                    <CustomButton type="submit" >SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(
    null,
    mapDispatchToProps
)(SignUp);