import React, { useState } from 'react'
import "./signinView.css"
import { useHistory } from 'react-router-dom'


export const SigninView = () => {

    const history = useHistory();
    const [loginEmail, setLoginEmail] = useState();
    const [loginPassword, setLoginPassword] = useState();


    function populateSignedin() {
        if (loginEmail == null || loginEmail === '') {
            alert("Missing Email")
        } else {
            if (loginPassword == null || loginPassword === '') {
                   alert("Missing Password")
            } else {
                localStorage.setItem('signedin', loginEmail)
                alert("Welcome " + loginEmail)
                history.push('/')
            }
        }
    }

    return (
        <div className="signinContainer">
            <h1 className="signinTitle">Please, sign in</h1>
            <p className="signinInputLabel">Email:</p>
            <input className="signinInput" onChange={
                (e) => setLoginEmail(e.target.value)}></input>
            <p className="signinPasswordLabel">Password:</p>
            <input className="signinPassword" onChange={
                (e) => setLoginPassword(e.target.value)}></input>
            <button className="signinButton" onClick={
                populateSignedin}>Sign in</button>
        </div>
    )
}
