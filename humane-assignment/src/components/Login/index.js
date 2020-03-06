import React, { useState } from "react";
import { Container, Col, Row, Form, Input, Button } from "reactstrap";
import "./style.css";
import logo from "../../logo.png";

function Login({callback}) {
  let [username,setUsername] = useState("");
  let [password,setPassword] = useState("");

  let handleSubmit = function(e){
    e.preventDefault();
    let [username,password] = e.target.elements;
    username = username.value;
    password = password.value;
    callback({username,password});
  }

  return (
    <Container className="flexed">
      <Row className="margin-auto flexed">
        <Form className="form-holder margin-auto" onSubmit={handleSubmit}>
         <Col md="12">
                <img alt="logo" src={logo} style={{width: "50%"}}/>
        </Col>
          <Col md="12" className="mt-4">
            <Input type="text" placeholder="username" value={username} onChange={e=>setUsername(e.target.value)}></Input>
          </Col>
          <Col md="12" className="mt-2">
            <Input type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}></Input>
          </Col>
          <Col md="12" className="mt-2">
            <Button color="success" block type="submit">Login</Button>
          </Col>
          <Col md="12" className="mt-2">
            <p><small>
              Don't have an account? 
              <a href="/"> <b>Singup</b></a>
            </small></p>
          </Col>
        </Form>
      </Row>
    </Container>
  );
}

export default Login;