import React from "react";
import { MdHome } from "react-icons/md";
import { Form, Button, FormControl, Nav, NavItem, Navbar } from "react-bootstrap";
import Home from "../Home";

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow=this.handleShow.bind(this);
        this.state = {
            show : false
        };
    }

    handleShow() {
        this.setState({ show : true});
    }

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
                        <NavItem eventKey={3} href="#Register" onClick={this.handleShow}>Register</NavItem>
                        <NavItem eventKey={4} href="#LogIn" onClick={this.handleShow}>Login</NavItem>
                    </Nav>
                </Form>
            </Navbar>
        );
    }
}