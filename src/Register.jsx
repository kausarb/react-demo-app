import React from "react";
import { Col, Form,FormGroup, FormControl } from "react-bootstrap";

export default class Register extends React.Component {
    render() {
        return (
            <div>
                <Col xs={6} md={4} />
                <Col xs={6} md={4} />
                <Form>
                    <FormGroup>
                        First Name
                        <FormControl required></FormControl>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}