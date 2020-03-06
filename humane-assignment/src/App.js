import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "@fortawesome/fontawesome-free/css/all.css"
import routes from "./routes";

import { BrowserRouter as Router } from "react-router-dom";
import Authorize from './Authorize';

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    {
                        routes.map(({ path, component, exact, requireAuth }) => <Authorize requireAuth={requireAuth} path={path} exact={exact} component={component}></Authorize>)
                    }
                </div>
            </Router>
        </div>
    );
}


export default App;
