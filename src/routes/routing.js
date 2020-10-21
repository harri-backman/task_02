import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HomeView } from '../view/homeview/homeView'
import { BrowserView } from '../view/browserview/browserView'
import { SigninView } from '../view/signinview/signinView'

// export const Routing = (props: any) => {
export const Routing = (props) => {
    return (
        <Router>
            <Suspense fallback={<h1>The page is loading, please wait ...</h1>}>
                {props.children}
                <Switch>
                    <Route exact path="/browse" component={BrowserView} />
                    <Route exact path="/signin" component={SigninView} />
                    <Route component={HomeView} />
                </Switch>
            </Suspense>
        </Router >
    )
}