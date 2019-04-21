import React from "react";
import { MdHome } from "react-icons/md";
import { Form, Button, FormControl, Nav, NavItem, Navbar } from "react-bootstrap";
import Home from "../Home";

export default class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Header>
                    <Navbar.Brand>
                        <MdHome />
                        <a href="#Home">{Home}</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#About">About</NavItem>
                    <NavItem eventKey={2} href="#Contact">Contact Us</NavItem>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button type="success" variant="outline-light">Search</Button>
                    <Nav inline>
                        <NavItem eventKey={3} href="#Register">Register</NavItem>
                        <NavItem eventKey={4} href="#LogIn">Log In</NavItem>
                    </Nav>
                </Form>
            </Navbar>
        );
    }
}