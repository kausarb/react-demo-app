import React from "react";
import { NavLink } from "react-router-dom";
import { Modal, Form, FormGroup, FormControl, Button, Col } from "react-bootstrap";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Phone number,username or email",
            password: "Password"
        };
    }
    render() {
        return (
            <section className="login">
                <NavLink to="/login">
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Login</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Col xs={6} md={4} />
                                <FormGroup bsSize="sm" validationState="success">
                                    <FormControl type="text" placeholder={this.state.username}></FormControl>
                                </FormGroup>
                                <FormGroup bsSize="sm" validationState="success">
                                    <FormControl type="password" placeholder={this.state.password}></FormControl>
                                </FormGroup>
                                <Button bsStyle="primary" center>Log In</Button>
                                Don't have an account? <a href="/Register">Sign up</a>
                            </Form>
                        </Modal.Body>
                    </Modal.Dialog>
                </NavLink>
            </section>
        );
    }
}