import React from "react";
import { Row, Col } from "reactstrap";

function ContactItem({ data: { name, title, company, address, industry } }) {
    return (
        <li data-testid="item" className="text-left contact-list-item">
            <Row>
                <Col md="6">
                    <h5 data-testid="name">{name} ({title})</h5>
                    <p data-testid="company">{company}</p>
                </Col>
                <Col md="6">
                    <p><strong>Address :</strong> {address}</p>
                    <p><strong>industry :</strong> {industry}</p>
                </Col>
            </Row>


        </li>
    )
}

export default ContactItem