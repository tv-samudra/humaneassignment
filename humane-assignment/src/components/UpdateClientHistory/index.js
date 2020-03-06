import React, { useState, useEffect } from "react";
import { Container, Row, Input, Form, Col, Button } from "reactstrap";
import logo from "../../logo.png";
import { useHistory } from "react-router-dom";

function UpdateClientHistory({ data, callback }) {
    let [_id, setId] = useState("");
    let [itemPurchased, setItemPurchased] = useState("");
    let [amount, setAmount] = useState("");
    let [merchant, setMerchant] = useState("");

    let history = useHistory();
    let handleSubmit = function (e) {
        e.preventDefault();
        callback({ itemPurchased, amount, merchant, _id });
    }

    useEffect(() => {
        setId(data._id);
        setItemPurchased(data.itemPurchased);
        setAmount(data.amount);
        setMerchant(data.merchant);
    }, [data]);

    let handleBack = () => { history.goBack() }
    return (
        <Container fluid>
            <Row className="mt-4">
                <Col md="3" className="text-left">
                    <img src={logo} alt="logo" style={{ width: "45%" }} />
                </Col>
                <Col md="6" className="text-center">

                </Col>
                <Col md="3" className="text-right">
                    <p>
                        <Button onClick={handleBack}>
                            <i className="fas fa-sign-out-alt"></i> Logout
                </Button>
                    </p>
                </Col>
            </Row>
            <hr></hr>
            <Row className="mt-4">
                <Form onSubmit={handleSubmit} style={{ width: "100vw" }} className="flexed">
                    <div className="margin-auto" style={{ width: "30vw" }}>
                        <Col md="12" className="text-left">
                            <Button><i className="fa fa-arrow-left" /> Back</Button>
                        </Col>
                        <Col md="12" className="mt-4">
                            <Input type="text" value={_id} placeholder="id" disabled></Input>
                        </Col>
                        <Col md="12" className="mt-4">
                            <Input type="text" value={itemPurchased} placeholder="item purchased" onChange={(e) => setItemPurchased(e.target.value)}></Input>
                        </Col>
                        <Col md="12" className="mt-4">
                            <Input type="text" value={amount} placeholder="amount" onChange={(e) => setAmount(e.target.value)}></Input>
                        </Col>
                        <Col md="12" className="mt-4">
                            <Input type="text" value={merchant} placeholder="merchant" onChange={(e) => setMerchant(e.target.value)}></Input>
                        </Col>
                        <Col md="12" className="mt-4">
                            <Input style={{ display: "inline-block" }} type="submit" className="btn-success" data-testid="submit" value="Update" onClick={handleSubmit}></Input>
                        </Col>
                    </div>
                </Form>
            </Row>
        </Container>
    )
}

export default UpdateClientHistory;