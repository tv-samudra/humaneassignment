import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
function Authorize({ component: Component, requireAuth, ...rest }) {
    let authenticated = useSelector(state => state.authenticated);
    return (<Route {...rest} render={(props) => (
        authenticated || !requireAuth ? <Component {...props} /> : <Redirect to="/"></Redirect>)
    }></Route>)
}

export default Authorize;