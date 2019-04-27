import React from "react";
import { NavLink } from "react-router-dom";
import { Modal, Form, FormGroup, FormControl, Button, Col } from "react-bootstrap";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            showModal: true,
        };
    }
    toggle() {
        this.setState({ showModal: !this.state.showModal });
    }
    render() {
        return (
            <div>
                <NavLink to="/login">
                    <Modal show={this.state.showModal}>
                        <Modal.Header>
                            <Modal.Title center>Login</Modal.Title>
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
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="success" type="submit">Log In</Button>
                            <Button bsStyle="primary" onClick={this.toggle}>Close</Button>
                            Don't have an account? <a href="/Register">Sign up</a>
                        </Modal.Footer>
                    </Modal>
                </NavLink>
            </div>
        );
    }
}