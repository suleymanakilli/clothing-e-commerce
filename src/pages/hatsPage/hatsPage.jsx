import React from 'react'
import {
    useParams, useLocation
} from "react-router-dom"
export default function HatsPage(props) {
    let params = useParams()
    const { state } = useLocation();
    console.log(state);
    console.log(props)
    console.log(params)
    return <h1>Hat Page</h1>
}
