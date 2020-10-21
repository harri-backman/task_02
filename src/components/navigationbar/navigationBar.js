import React from 'react'
import './navigationBar.css'
import { useHistory } from 'react-router-dom'


export const NavigationBar = () => {
    
    const history = useHistory()

    function removeSignedin() {
        localStorage.removeItem('signedin')
        history.push("/")
    }
    
    return (
        <div className="navigationBarContainer">
            <p className="navigationBarTitleA">Folk</p>

            <span className="navigationBarHome" onClick={() => 
                history.push("/")}>Home Page</span>
            <span className="navigationBarBrowse" onClick={() => 
                history.push("/browse")}>Browse for Notes and Music</span>
            <span className="navigationBarSignin" onClick={() => 
                history.push("/signin")}>Sign in</span>

            <span className="navigationBarLogout" onClick={                 
                removeSignedin}>Log out</span>

            <p className="navigationBarTitleB">Music</p>
        </div>
    )
}
