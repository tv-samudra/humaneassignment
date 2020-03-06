import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Form, Row, Col, Label, Input, FormGroup } from "reactstrap";

function AdvanceFilter({ isOpen = false, toggle, onFiltered }) {
    const placeholderText = { transactionId: "Enter a transactionID", merchantId: "Enter a merchantID" };
    const searchOption = ["transactionId", "merchantId"];

    let [searchBy, setSearchBy] = useState(0);
    let [query, setQuery] = useState("");

    let placeholder = placeholderText[searchOption[searchBy]];

    let handleRadioButton = function (e) {
        let selected = Number(e.target.value);
        setSearchBy(selected);
    }

    let handleSubmit = function (e) {
        e.preventDefault();
        onFiltered({ searchBy: searchOption[searchBy], query });
        toggle();
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle} data-testid="advfilter">
            <ModalHeader>
                Advance Filter
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md="12">
                            <Input type="text" data-testid="search" name="search" placeholder={placeholder} onChange={e => setQuery(e.target.value)}></Input>
                            {/* <Label for="transactionId">Transaction Id</Label>
              <Input type="text" name="transactionId" placeholder="Enter transactionId"></Input> */}
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md="6">
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="searchby" defaultChecked="0" value="0" onChange={handleRadioButton} />{' '}
                                    By Transaction Id
                  </Label>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="searchby" value="1" onChange={handleRadioButton} />{' '}
                                    By Merchand Id
                  </Label>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md="12">
                            <Input type="submit" data-testid="applyadvfilter" className="btn btn-primary" value="Apply"></Input>
                        </Col>
                    </Row>
                </Form>
            </ModalBody>
        </Modal >
    )
}

export default AdvanceFilter;