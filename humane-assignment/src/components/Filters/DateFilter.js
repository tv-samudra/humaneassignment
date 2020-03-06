import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Row, Col, Button, Label, InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import DatePicker from "../DatePicker/DatePicker";

function DateFilter({ isOpen = false, startDate, setStartDate, endDate, setEndDate, toggle, onSelect }) {

    let handleApply = _ => {
        onSelect({ startDate, endDate })
        toggle();
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle} data-testid="datefilter">
            <ModalHeader>
                Filter By
            </ModalHeader>
            <ModalBody>
                <Row>
                    <Col md="6" className="text-left">
                        <Label for="startDate">Start date</Label>
                        <DatePicker height="200px" onSelect={setStartDate} defaultValue={startDate} fontSize="0.8rem"></DatePicker>
                    </Col>
                    <Col md="6" className="text-left">
                        <Label for="startDate">End date</Label>
                        <DatePicker height="200px" onSelect={setEndDate} defaultValue={endDate} fontSize="0.8rem"></DatePicker>
                    </Col>
                    <Col md="12" className="mt-4 text-left">
                        <Button type="submit" data-testid="applydate" onClick={handleApply}>Apply Filter</Button>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    )
}

export default DateFilter;