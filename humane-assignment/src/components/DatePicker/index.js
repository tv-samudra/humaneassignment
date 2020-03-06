import React, { useState, useRef, createRef } from "react";
import { Modal, ModalHeader, Input, ModalBody, Container, Row, Col, ModalFooter } from "reactstrap";
import "./style.css";

function DatePicker({ isOpen = false, height = "50vh", toggle, defaultValue, onSelect }) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let months = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11];
  let [defaultDate, setVisibleDate] = useState(new Date() || defaultValue);
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
    toggle();
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="datepicker" style={{ height: height }}>
      <ModalHeader>
        <Input type="text" className="text-center" disabled value={new Date(year, month, date).toDateString()} block placeholder="dd/mm/yyyy"></Input>
      </ModalHeader>
      <ModalBody>
        <Container>
          <Row className="text-center dark">
            <Col md="4"><h6>Day</h6></Col>
            <Col md="4"><h6>Month</h6></Col>
            <Col md="4"><h6>Year</h6></Col>
          </Row>
          <Row className="text-center">
            <Col md="4" className="scrollable" style={{ height }}>
              {dateListForSelectedMonth().map(item => item == date ?
                <p className="selected datepicker-fields" onClick={handleDateChange}>{item}</p>
                : <p className="datepicker-fields" onClick={handleDateChange}>{item}</p>)}
            </Col>
            <Col md="4" className="scrollable" style={{ height }}>
              {months.map(item => item == month ?
                <p className="selected datepicker-fields" onClick={handleMonthChange}>{++item}</p>
                : <p className="datepicker-fields" onClick={handleMonthChange}>{++item}</p>)}
            </Col>
            <Col md="4" className="scrollable" style={{ height }}>
              {getListOfYear().map(item => item === year ?
                <p className="datepicker-fields selected" onClick={handleYearChange}>{item}</p>
                : <p onClick={handleYearChange} className="datepicker-fields">{item}</p>
              )}
            </Col>
          </Row>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Input type="submit" className="btn btn-success" value="Apply" onClick={handleSubmit}></Input>
      </ModalFooter>
    </Modal>
  )
}

export default DatePicker;