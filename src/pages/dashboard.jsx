import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label } from "reactstrap";


export default class LoginPages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: '',
                password: ''
            },
            forms: []
        }
    }

    handleInput = (inputName, inputValue) => {
        const { form } = { ...this.state }
        form[inputName] = inputValue
        this.setState({ form })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {form, forms} = {...this.state}
        if (form.id > 0) {
            let newData = forms.map((data) => {
                if (data.id === form.id) {
                    return form;
                }
                return data;
            });

            this.setState({ forms: newData });
        }
        else {
            form.id = forms.length + 1;
            this.setState({ forms: forms.concat({ ...form }) });
        }
    }

    resetForm =()=> {
        this.setState({form: {email: '', password: ''} });
    }

    render() {
        const {forms} = {...this.state}
        console.log("forms", forms);
        return (
            <Card>
                <CardHeader tag="form">SMM x Enigmacamp</CardHeader>
                <CardBody>
                    <Form onSubmit={this.handleSubmit} >
                        <FormGroup row>
                            <Col sm="3">
                                <Label for="inputEmail" >
                                    Email
                                </Label>
                            </Col>
                            <Col sm="9">
                                <Input id="inputEmail" name="email" placeholder="Email" type="email" onChange={(e) => this.handleInput("email", e.target.value)}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm="3">
                                <Label for="inputPassword" >
                                    Password
                                </Label>
                            </Col>
                            <Col sm="9">
                                <Input id="inputPassword" name="password" placeholder="Password" type="password" onChange={(e) => this.handleInput("password", e.target.value)}/>
                            </Col>
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </Form>
                </CardBody>
            </Card>
        )
    }
}