import React, { useState, useRef, createRef } from "react";
import ReactDOM from "react-dom";
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button, Container, Row, Col } from "reactstrap";
import "./style.css";

function DatePicker({ height = "300px", onSelect, defaultValue, fontSize = "1rem" }) {
    let currentDate = new Date();
    /**Datepicker state */
    let [isOpen, toggle] = useState("");

    let currentYear = currentDate.getFullYear();
    let months = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11];
    /**Date breakdown */
    let [year, setYear] = useState(currentDate.getFullYear());
    let [date, setDate] = useState(currentDate.getDate());
    let [month, setMonth] = useState(currentDate.getMonth());
    let isLeapYear = year % 4 == 0 ? true : false;
    let daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 30, 31, 30, 31];

    let getListOfYear = function () {
        let offset = currentYear - 10;
        let yearList = [];
        for (let i = offset; i < currentYear + 1; i++) {
            yearList.push(i);
        }
        return yearList;
    };

    let handleToggle = function () {
        isOpen == "" ? toggle("isOpen") : toggle("");
    }

    let handleYearChange = function (e) {
        setYear(Number(e.currentTarget.innerText));
    }

    let handleMonthChange = function (e) {
        setMonth(Number(e.currentTarget.innerText - 1));
    }

    let handleDateChange = function (e) {
        setDate(Number(e.currentTarget.innerText));
    }

    let dateListForSelectedMonth = function () {
        let dateList = [];
        for (let i = 1; i <= daysInMonth[month]; i++) {
            dateList.push(i);
        }
        return dateList;
    }

    let handleSubmit = function () {
        onSelect(new Date(year, month, date));
        handleToggle();
    }

    return (
        <Container className="datepicker" style={{ fontSize }}>
            <Row>
                <InputGroup>
                    <Input type="text" value={date + "/" + month + "/" + year} placeholder="dd/mm/yyyy"></Input>
                    <InputGroupAddon addonType="append" onClick={handleToggle}>
                        <InputGroupText>
                            <i class="fa fa-calendar" aria-hidden="true" ></i>
                        </InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </Row>
            <div className={"picker-holder " + isOpen}>
                <Row className="text-center calender">
                    <Col md="4" sm="4" xs="4" className="scrollable" style={{ height }}>
                        {dateListForSelectedMonth().map(item => item == date ?
                            <p key={item} className="selected datepicker-fields" onClick={handleDateChange}>{item}</p>
                            : <p key={item} className="datepicker-fields" onClick={handleDateChange}>{item}</p>)}
                    </Col>
                    <Col md="4" sm="4" xs="4" className="scrollable" style={{ height }}>
                        {months.map(item => item == month ?
                            <p key={item} className="selected datepicker-fields" onClick={handleMonthChange}>{++item}</p>
                            : <p key={item} className="datepicker-fields" onClick={handleMonthChange}>{++item}</p>)}
                    </Col>
                    <Col md="4" sm="4" xs="4" className="scrollable" style={{ height }}>
                        {getListOfYear().map(item => item === year ?
                            <p key={item} className="datepicker-fields selected" onClick={handleYearChange}>{item}</p>
                            : <p key={item} onClick={handleYearChange} className="datepicker-fields">{item}</p>
                        )}
                    </Col>
                    <Col md="12" className="mb-4 mt-4">
                        <Button block onClick={handleSubmit} className="btn btn-success"><i className="fa fa-check"></i></Button>
                    </Col>
                </Row>
                <div className="clearfix"></div>
            </div>
        </Container>
    )
}

export default DatePicker;