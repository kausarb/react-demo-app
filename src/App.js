import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Contact, Oops404 } from "./constants/AppConstants";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import CarouselSlide from "./Components/CarouselSlide";

export default class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <NavigationBar />
                    <CarouselSlide />
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/register" component={Register} />
                        <Route component={Oops404} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}