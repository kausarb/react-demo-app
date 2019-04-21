import React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Contact, Oops404 } from "./constants/AppConstants";
import Home from "./Home";
import Login from "./Login";

render(
    <HashRouter>
        <div className="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/contact" component={Contact} />
                <Route component={Oops404} />
            </Switch>

        </div>
    </HashRouter>, document.getElementById("root")
);