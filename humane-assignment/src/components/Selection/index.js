import React, { useState } from "react";
import { Container, Col, Row, Input, Form, Button } from "reactstrap";
import logo from "../../logo.png";
import ClientContactContainer from "../../containers/ClientContactContainer";
import SpentHistoryContainer from "../../containers/SpentHistoryContainer";
import { useDispatch } from "react-redux";
import actionConstants from "../../redux/actionConstants";

function Selection() {
    let [state, setState] = useState("clientHistory");

    let dispatch = useDispatch();

    let handleChange = function (e) {
        e.preventDefault();
        let container = e.target.value;
        setState(container);
    }

    let handleLogout = function () {
        dispatch({
            type: actionConstants.SET_AUTHENTICATION,
            payload: {
                token: null,
                authenticated: false
            }
        })
        localStorage.removeItem("token");
    }
    return (<>
        <Container fluid>
            <Row className="mt-4">
                <Col md="3" className="text-left">
                    <img src={logo} alt="logo" style={{ width: "45%" }} />
                </Col>
                <Col md="6" className="text-center">
                    <Input className="margin-auto" type="select" data-testid="select" name="services" defaultValue={state} onChange={handleChange}>
                        <option value="clientHistory">Client Spent History</option>
                        <option value="clientContact">Client Contact Management</option>
                    </Input>
                </Col>
                <Col md="3" className="text-right">
                    <p>
                        <Button onClick={handleLogout}>
                            <i data-testid="logout" className="fas fa-sign-out-alt"></i> Logout
                            </Button>
                    </p>
                </Col>
            </Row>
        </Container>
        <hr></hr>
        {state === "clientHistory" ? <SpentHistoryContainer /> : <ClientContactContainer />}
    </>)
}

export default Selection;