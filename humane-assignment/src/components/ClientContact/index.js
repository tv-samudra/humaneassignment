import React, { useState } from "react";
import { Container, Row, Col, Input, InputGroupAddon, InputGroup, InputGroupText } from "reactstrap";
import ContactItem from "./ContactItem/ContactItem";
import "./style.css";
import AdvanceFilter from "./AdvanceFilter/AdvanceFilter";

function ClientContact({ data = [], search, advanceFilters }) {

    let [isOpen, toggle] = useState(false);
    let handleApply = function (filters) {
        advanceFilters(filters);
        handleToggle();
    }

    let handleToggle = function () {
        toggle(!isOpen);
    }

    let handleSearch = (e) => {
        search(e.target.value);
    }

    let resetFilter = () => {
        advanceFilters({ name: null, selected: [] })
    }

    return (
        <Container fluid data-testid="clientContact">
            <Row>
                <Col md="6" className="mt-4">
                    <InputGroup>
                        <Input type="text" data-testid="handlesearch" placeholder="Search by name / title / address" onChange={handleSearch}></Input>
                        <InputGroupAddon data-testid="togglesearch" addonType="append" onClick={_ => toggle(!isOpen)}>
                            <InputGroupText>
                                <i className="fas fa-sliders-h"></i>
                            </InputGroupText>
                        </InputGroupAddon>
                        <InputGroupAddon addonType="append">
                            <InputGroupText>
                                <i className="fa fa-redo" data-testid="resetFilter" aria-hidden="true" onClick={resetFilter}></i>
                            </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="clientContact mt-4">
                {/**List */}
                <Col md="12" className="mt-4">
                    <ul className="contact-list" data-testid="list">
                        {data.map(item => <ContactItem key={item._id} data={item}></ContactItem>)}
                    </ul>
                </Col>
            </Row>
            <AdvanceFilter isOpen={isOpen} handleApply={handleApply} toggle={handleToggle}></AdvanceFilter>
        </Container>
    );
}

export default ClientContact;