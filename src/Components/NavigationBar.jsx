import React from "react";
import { Form, Button, FormControl, Nav, NavItem, Navbar, Glyphicon } from "react-bootstrap";
import { NavBarColor } from "../constants/AppConstants";
import { MdHome } from "react-icons/md"; 

export default class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar style={NavBarColor}>
                <Navbar.Brand className="mr-md-2">
                    <a href="/"><MdHome /></a>
                    <Glyphicon glyph="menu-hamburger" />
                </Navbar.Brand>
                <Nav className="mr-0 mr-md-2">
                    <NavItem eventKey={1} href="#About" >About</NavItem>
                    <NavItem eventKey={2} href="#Contact">Contact Us</NavItem>
                </Nav>
                <Form className="ml-md-auto" inline>
                    <FormControl type="text" placeholder="Search" />
                    <Button type="success" variant="secondary">Search</Button>
                    <Nav inline>
                        <NavItem eventKey={3} href="#register">Register</NavItem>
                        <NavItem eventKey={4} href="#login">Login</NavItem>
                    </Nav>
                </Form>
            </Navbar>
        );
    }
}