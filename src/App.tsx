import React from "react";
import {
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

import Info from "./app/components/Info";
import Header from "./app/components/Header";
import HomePage from "./app/components/HomePage";

function App(): JSX.Element {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path={"/home"} component={HomePage} />
                <Route exact path={"/info/:id"} component={Info} />
                <Redirect to={"/home"} />
            </Switch>
        </Router>
    );
}

export default App;
