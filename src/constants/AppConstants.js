import React from "react";
import Home from "../Home";
import img1 from "../assets/img1.jpg";

export const Contact = () => (<section className="contact"> <h1>Contact Us</h1> </section>);
export const Oops404 = ({location}) => (<div className="oops-404"><h1>Resource not found at '{location.pathname}'</h1></div>);
export const PageTemplate = ({children}) => (<div className="page"><img src={img1} alt="background"/><Home />{children}</div>);
export const NavBarColor = {backgroundColor: "#e84409"};