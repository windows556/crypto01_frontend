import React from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        let target = event.target;
        if (target.name === "username") {
            this.setState({
                username: target.value
            });
        }
        if (target.name === "password") {
            this.setState({
                password: target.value
            });
        }
    }

    async handleSubmit(event) {
        // await axios.post("/signup", {
        //     username: this.state.username,
        //     password: this.state.password
        // })
        //     .then(() => {
        //         console.log("post success");
        //     });
        console.log("inside handleSubmit")
        await axios.post("/login/signup")
            .then(() => {
                console.log("post success");
            });
        event.preventDefault();
    }

    render() {
        return (
            // <div>
            //     <Form onSubmit={this.handleSubmit}>
            //         <Form.Group controlId="formUsername">
            //             <Form.Label>Username</Form.Label>
            //             <Form.Control name="username" type="text" placeholder="Username" onChange={this.handleInputChange} />
            //             {/* <Form.Text className="text-muted">
            //                 We'll never share your email with anyone else.
            //             </Form.Text> */}
            //         </Form.Group>

            //         <Form.Group controlId="formPassword">
            //             <Form.Label>Password</Form.Label>
            //             <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleInputChange} />
            //         </Form.Group>
            //         {/* <Form.Group controlId="formBasicCheckbox">
            //             <Form.Check type="checkbox" label="Check me out" />
            //         </Form.Group> */}
            //         <Button variant="primary" type="submit">
            //             Submit
            //         </Button>
            //     </Form>
            // </div>

            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="password" />
                </FormGroup>
                <Button>Sign Up</Button>
            </Form>

            // <form action="/signup" method="post" style="display:block">
            //     <label for="username">Username</label>
            //     <input type="text" name="username" placeholder="Create a username" required="required"
            //         id='username' />
            //     <label for="password">Password</label>
            //     <input type="password" name="password" placeholder="Create a password" required="required"
            //         id='password' />
            //     <button type="submit" class="btn btn-secondary btn-block px-4" id="button">Sign Up</button>
            // </form>
        )
    }
}

export default Login;