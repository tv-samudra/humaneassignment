import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, Form, ModalBody, Col, Row, FormGroup, Label, Button, Input, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import "./style.css";
import axios from "axios";
import config from "../../../config";

function AdvanceFilter({ isOpen, toggle, handleApply }) {
    const [activeTab, setActiveTab] = useState('1');
    let [filterBy, setFilterBy] = useState(null);
    let [nameFilter, setNameFilters] = useState([]);
    let [companyFilter, setCompanyFilters] = useState([]);
    let [industryFilter, setIndustryFilter] = useState([]);

    useEffect(() => {
        axios.get(`${config.host}/contacts/filters`).then(({ data: { filters: { industry, company, name } } }) => {
            setNameFilters(name);
            setCompanyFilters(company);
            setIndustryFilter(industry);
        })
    }, []);

    let getFilters = function ({ name, selected }) {
        handleApply({ name, selected });
    }

    const toggleTabs = tab => {
        if (activeTab !== tab) setActiveTab(tab);
        if (tab === "1") {
            setFilterBy("name");
        } else {
            setFilterBy("industry");
        }
    }

    return (
        <Modal data-testid="advanceFilter" isOpen={isOpen} toggle={toggle}>
            <ModalHeader>
                Filter By
            </ModalHeader>
            <ModalBody>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => { toggleTabs('1'); }}>
                            By Name
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => { toggleTabs('2'); }}>
                            By Industry
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => { toggleTabs('3'); }}>
                            By Company
          </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Filter name="name" data={nameFilter} onFilter={getFilters}></Filter>
                    </TabPane>
                    <TabPane tabId="2">
                        <Filter name="industry" data={industryFilter} onFilter={getFilters}></Filter>
                    </TabPane>
                    <TabPane tabId="3">
                        <Filter name="company" data={companyFilter} onFilter={getFilters}></Filter>
                    </TabPane>
                </TabContent>
            </ModalBody>
        </Modal>
    );
}

function Filter({ name, data, onFilter }) {

    let [checkedElems, setChecked] = useState([]);
    let selectFiltered = function (e) {
        e.preventDefault();
        onFilter({ name, selected: checkedElems })
    }

    // let [localData,setLocalData] = useState([...data]);

    let markChecked = function (item) {
        if (checkedElems.includes(item)) {
            checkedElems.pop(item);
        } else {
            checkedElems.push(item);
        }
        setChecked(checkedElems);
    }

    return (
        <Form onSubmit={selectFiltered}>
            <Row className="mt-4">
                <Col md="12">
                    {/* <Input type="text" placeholder="Search by name" onChange={filterFromData}></Input> */}
                </Col>
                <Col md="12">
                    <ul className="filter-list">
                        {data.map(option => {
                            return <li className="filter-list-item">
                                <FormGroup check className="mt-2">
                                    <Label check>
                                        {checkedElems.includes(option) ?
                                            <input type="checkbox" name={option} checked="true" onClick={(e) => { markChecked(option) }} />
                                            :
                                            <input type="checkbox" name={option} onClick={(e) => { markChecked(option) }} />
                                        }&nbsp;&nbsp;
                    {option}
                                    </Label>
                                </FormGroup>
                            </li>
                        }
                        )}
                    </ul>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md="12">
                    <Input data-testid={name + "apply"} type="submit" value="Apply"></Input>
                </Col>
            </Row>
        </Form>
    )
}
export default AdvanceFilter;