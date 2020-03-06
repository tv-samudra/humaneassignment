import React, { useState } from "react";
import { Container, Row, Col, Button, Input, ButtonGroup, Table, InputGroup, InputGroupAddon, InputGroupText, Label } from "reactstrap";
import AdvanceFilter from "../Filters/AdvanceFilter";
import "./style.css";
import DateFilter from "../Filters/DateFilter";

function SpentHistory({ data, onFiltered, isFilterApplied, startDate, endDate, setStartDate, setEndDate }) {

    let onDateFilterSelect = function ({ startDate, endDate }) {
        setStartDate(startDate);
        setEndDate(endDate);
        isFilterApplied();
    }

    let handleAdvFilter = function ({ searchBy, query }) {
        onFiltered({ searchBy, query });
        isFilterApplied();
    }
    /**Filter modals */
    let [isAdvFilterOpen, toggleAdvFilter] = useState(false);
    let handleAdvFilterToggle = _ => toggleAdvFilter(!isAdvFilterOpen);

    let [isDateFilterOpen, toggleDateFilter] = useState(false);
    let handleDateFilterToggle = _ => toggleDateFilter(!isDateFilterOpen);

    let resetFilter = () => {
        let today = new Date();
        onFiltered({ searchBy: null, query: null });
        setStartDate(today);
        setEndDate(today);
        isFilterApplied();
    }

    return (
        <Container fluid style={{ padding: "10px", background: "#fff", width: "100%" }}>
            <Row>
                <Col md="6" className="headings text-left">
                    <h4>Client Spent History</h4>
                </Col>
                <Col md="6" className="text-right">
                    <Button type="button" data-testid="toggleAdvanceFilter" onClick={_ => toggleAdvFilter(true)}><i className="fa fa-search" /> Advance Search</Button>
                    &nbsp;&nbsp;
            <Button type="button" data-testid="toggledatefilter" onClick={_ => toggleDateFilter(true)}><i className="fas fa-calendar-alt"></i> Filter by date</Button>&nbsp;&nbsp;
            <Button type="button" data-testid="resetFilter" onClick={resetFilter}><i className="fas fa-sync-alt"></i> Reset Filter</Button>
                    <AdvanceFilter isOpen={isAdvFilterOpen} toggle={handleAdvFilterToggle} onFiltered={handleAdvFilter}></AdvanceFilter>
                    <DateFilter
                        onSelect={onDateFilterSelect}
                        startDate={startDate}
                        endDate={endDate}
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                        isOpen={isDateFilterOpen}
                        toggle={handleDateFilterToggle}></DateFilter>
                </Col>
            </Row>
            {/**Content */}
            <Row className="mt-4 mb-4">
                <Col md="12" className="text-left">
                    <strong>From :</strong> {startDate.toDateString()}<strong> to </strong> {endDate.toDateString()}
                </Col>
            </Row>
            <Row>
                <Col md="12" className="history-table">
                    <Table>
                        <thead className="dark">
                            <tr>
                                {data.headers.map(header => <th key={header}>{header}</th>)}
                            </tr>
                        </thead>
                        <tbody data-testid="table">
                            {!data.data.length ?
                                <tr><td colSpan={data.headers.length}>No data available</td></tr>
                                :
                                data.data.map(items => <tr key={items[0]}>{items.map(fieldValue => <td key={fieldValue}>{fieldValue}</td>)}</tr>)
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
            {/**Filters */}
        </Container>
    );
}

export default SpentHistory;