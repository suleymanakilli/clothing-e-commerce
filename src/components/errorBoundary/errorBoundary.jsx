import React, { Component } from 'react'
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './errorBoundaryStyle'


export default class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasErrored: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={'https://i.imgur.com/lKJiT77.png'} />
                    <ErrorImageText>A dog ate this page.</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return this.props.children
    }
}

