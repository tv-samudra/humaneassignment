import React from 'react'
import { render, fireEvent, waitForDomChange } from '@testing-library/react'
import '@testing-library/jest-dom';
import ClientContact from "./index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe(`Selection`, () => {
    it("should contain passed data", () => {
        let advanceFilters = jest.fn();
        let search = jest.fn();
        let data = [
            {
                "_id": "5e60cb55c4aabe1c30c08aef",
                "name": "Sam",
                "title": "MERN Stack Developer",
                "company": "Tech Variable",
                "industry": "Information Technology",
                "address": "Satgaon",
                "__v": 0
            },
        ]
        let { getByTestId } = render(<ClientContact data={data} search={search} advanceFilters={advanceFilters}></ClientContact>);
        expect(getByTestId(/list/i).childElementCount).toBe(1);
    });

    it("should reset filters", () => {
        let advanceFilters = jest.fn();
        let search = jest.fn();

        let data = [
            {
                "_id": "5e60cb55c4aabe1c30c08aef",
                "name": "Sam",
                "title": "MERN Stack Developer",
                "company": "Tech Variable",
                "industry": "Information Technology",
                "address": "Satgaon",
                "__v": 0
            },
        ]
        let { getByTestId } = render(<ClientContact data={data} search={search} advanceFilters={advanceFilters}></ClientContact>);
        fireEvent.click(getByTestId(/resetfilter/i));
        expect(advanceFilters).toBeCalled();
    });

    it("should call search", () => {
        let advanceFilters = jest.fn();
        let search = jest.fn();

        let data = [
            {
                "_id": "5e60cb55c4aabe1c30c08aef",
                "name": "Sam",
                "title": "MERN Stack Developer",
                "company": "Tech Variable",
                "industry": "Information Technology",
                "address": "Satgaon",
                "__v": 0
            },
        ]
        let { getByTestId } = render(<ClientContact data={data} search={search} advanceFilters={advanceFilters}></ClientContact>);
        fireEvent.change(getByTestId(/handlesearch/i), { target: { value: 'test' } });
        expect(search).toBeCalled();
    });

    it("should Open Advanced Filters modal", () => {
        let advanceFilters = jest.fn();
        let search = jest.fn();

        let { getByTestId } = render(<ClientContact search={search} advanceFilters={advanceFilters}></ClientContact>);
        fireEvent.click(getByTestId(/togglesearch/i));
        waitForDomChange();
        expect(getByTestId("advanceFilter")).toBeInTheDOM()
    });

    it("should Open Advanced Filters modal", () => {
        let advanceFilters = jest.fn();
        let search = jest.fn();

        let data = [
            {
                "_id": "5e60cb55c4aabe1c30c08aef",
                "name": "Sam",
                "title": "MERN Stack Developer",
                "company": "Tech Variable",
                "industry": "Information Technology",
                "address": "Satgaon",
                "__v": 0
            },
        ]
        let { getByTestId } = render(<ClientContact data={data} search={search} advanceFilters={advanceFilters}></ClientContact>);
        fireEvent.click(getByTestId(/togglesearch/i));
        waitForDomChange();
        fireEvent.click(getByTestId("nameapply"));
        expect(advanceFilters).toBeCalled();

    });
});
