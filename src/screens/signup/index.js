import React from "react";
import logo from "./logo.jpg";
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import "./index.css";

function Signup() {
    const history = useHistory();
    return (
        <div  >
            <div style={{overflowY: "hidden"}}>
                <Container className="login_container"><br /><br />
                    <img src={logo} alt="logo" style={{ marginTop: "-6rem" }} /><br />
                    <Button className="button4" onClick={() => history.push("/")} color="black">LOGIN</Button>
                    <Button className="button5" onClick={() => history.push("/signup")} color="black">SIGNUP</Button><br /><br /><br />
                    <Form>
                    <FormGroup>
                    <Input className="login_input1" type="text" name="firstName" placeholder="FIRST NAME" />
                    <Input className="login_input1" type="text" name="lastName" placeholder="LAST NAME" />
                    <Input className="login_input1" type="email" name="username" placeholder="USERNAME" />
                    <Input className="login_input1" type="password" name="password" id="examplePassword" placeholder="PASSWORD" />
                    </FormGroup><br />
                    <FormGroup>
                    <Button className="button1" > SIGNUP </Button>
                    </FormGroup>
                    </Form>
                </Container>
            </div>
        </div>
    )
}

export default Signup;