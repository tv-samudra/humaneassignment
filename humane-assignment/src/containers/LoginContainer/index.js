import React, { useState, useEffect, useContext } from "react";
import Login from "../../components/Login";
import store from "../../store";
import { authenticate } from "../../apis/users";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actionConstants from "../../redux/actionConstants";

function LoginContainer() {
    let history = useHistory();
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [isSubmited, setSubmited] = useState(false);

    let dispatch = useDispatch();
    let onFormSubmit = function ({ username, password }) {
        setUsername(username);
        setPassword(password);
        setSubmited(true);
    }

    let authenticated = useSelector(state => state.authenticated);

    if (authenticated) {
        history.push("/selection");
    }

    useEffect(() => {
        authenticate({ username, password }, function (data) {
            if (!data) { setSubmited(false) }
            else {
                if (data.success) {
                    dispatch({
                        type: actionConstants.SET_AUTHENTICATION,
                        payload: {
                            token: data.data.token,
                            authenticated: true
                        }
                    })
                    /**save the token in the local storage */

                    localStorage.setItem("token", data.data.token);
                    history.push("/selection");
                }
            }
        });
    }, [isSubmited])

    return (
        <Login data-testid="login" callback={onFormSubmit}></Login>
    )
}

export default LoginContainer;