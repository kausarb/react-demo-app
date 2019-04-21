import React from "react";
import { NavLink } from "react-router-dom";
import { Modal, Form, FormGroup, FormControl, Button, Col } from "react-bootstrap";

export default class Login extends React.Component {
    render() {
        return (
            <section className="login">
                <NavLink to="/login">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Login</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Col xs={6} md={4} />
                                <FormGroup bsSize="sm" validationState="success">
                                    <FormControl type="text" placeholder="Phone number,username or email"></FormControl>
                                </FormGroup>
                                <FormGroup bsSize="sm" validationState="success">
                                    <FormControl type="password" placeholder="Password"></FormControl>
                                </FormGroup>
                                <Button bsStyle="primary" center>Log in</Button>
                                Don't have an account? <a href="/signup">Sign up</a>
                            </Form>
                        </Modal.Body>
                    </Modal.Dialog>
                </NavLink>
            </section>
        );
    }
}