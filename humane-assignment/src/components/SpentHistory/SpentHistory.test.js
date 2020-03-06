import React from 'react'
import { render, fireEvent, screen, waitForDomChange } from '@testing-library/react'
import '@testing-library/jest-dom';
import SpentHistory from "./index";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn()
    })
}));

describe(`SpentHistory`, () => {
    it("should contain no react error", () => {
        let onFiltered = jest.fn();
        let isFilterApplied = jest.fn();
        let setStartDate = jest.fn();
        let data = {
            headers: ["TransactionId", "Items Purchased", "Amount", "Merchant", ""],
            data: [
                ["5e60cb55c4aabe1c30c08af4", "4ue3b8", 417, "7tt8bo", <button></button>],
            ]
        }

        let today = new Date();
        render(<SpentHistory data={data} onFiltered={onFiltered} isFilterApplied={isFilterApplied} startDate={today} endDate={today} setStartDate={setStartDate} setEndDate={setStartDate}>
        </SpentHistory>);
        /**Input username */

    });

    it("should contain passed data", () => {
        let onFiltered = jest.fn();
        let isFilterApplied = jest.fn();
        let setStartDate = jest.fn();
        let data = {
            headers: ["TransactionId", "Items Purchased", "Amount", "Merchant", ""],
            data: [
                ["5e60cb55c4aabe1c30c08af4", "4ue3b8", 417, "7tt8bo", <button></button>],
            ]
        }

        let today = new Date();
        let { getByTestId } = render(<SpentHistory data={data} onFiltered={onFiltered} isFilterApplied={isFilterApplied} startDate={today} endDate={today} setStartDate={setStartDate} setEndDate={setStartDate}>
        </SpentHistory>);

        let tableList = getByTestId(/table/i);
        expect(tableList.children.length).toBe(1);

    });

    it("should open advance filter modal", () => {
        let onFiltered = jest.fn();
        let isFilterApplied = jest.fn();
        let setStartDate = jest.fn();
        let data = {
            headers: ["TransactionId", "Items Purchased", "Amount", "Merchant", ""],
            data: [
                ["5e60cb55c4aabe1c30c08af4", "4ue3b8", 417, "7tt8bo", <button></button>],
            ]
        }

        let today = new Date();
        let { getByTestId } = render(<SpentHistory data={data} onFiltered={onFiltered} isFilterApplied={isFilterApplied} startDate={today} endDate={today} setStartDate={setStartDate} setEndDate={setStartDate}>
        </SpentHistory>);

        fireEvent.click(getByTestId(/toggleAdvanceFilter/i));
        waitForDomChange();
        let advancefilter = getByTestId("advfilter");
        expect(advancefilter).toBeInTheDOM();

    });

    it("should open date filter modal", () => {
        let onFiltered = jest.fn();
        let isFilterApplied = jest.fn();
        let setStartDate = jest.fn();
        let data = {
            headers: ["TransactionId", "Items Purchased", "Amount", "Merchant", ""],
            data: [
                ["5e60cb55c4aabe1c30c08af4", "4ue3b8", 417, "7tt8bo", <button></button>],
            ]
        }

        let today = new Date();
        let { getByTestId } = render(<SpentHistory data={data} onFiltered={onFiltered} isFilterApplied={isFilterApplied} startDate={today} endDate={today} setStartDate={setStartDate} setEndDate={setStartDate}>
        </SpentHistory>);

        fireEvent.click(getByTestId(/toggledatefilter/i));
        waitForDomChange();
        let datefilter = getByTestId("datefilter");
        expect(datefilter).toBeInTheDOM();

    });

    it("should should call setStartDate", () => {
        let onFiltered = jest.fn();
        let isFilterApplied = jest.fn();
        let setStartDate = jest.fn();
        let setEndDate = jest.fn();

        let data = {
            headers: ["TransactionId", "Items Purchased", "Amount", "Merchant", ""],
            data: [
                ["5e60cb55c4aabe1c30c08af4", "4ue3b8", 417, "7tt8bo", <button></button>],
            ]
        }

        let today = new Date();
        let { getByTestId } = render(<SpentHistory data={data} onFiltered={onFiltered} isFilterApplied={isFilterApplied} startDate={today} endDate={today} setStartDate={setStartDate} setEndDate={setEndDate}>
        </SpentHistory>);

        fireEvent.click(getByTestId(/toggledatefilter/i));
        waitForDomChange();
        fireEvent.click(getByTestId("applydate"));
        expect(setStartDate).toBeCalled();
        expect(setEndDate).toBeCalled();
    });

    it("should call isFiltered", () => {
        let onFiltered = jest.fn();
        let isFilterApplied = jest.fn();
        let setStartDate = jest.fn();
        let data = {
            headers: ["TransactionId", "Items Purchased", "Amount", "Merchant", ""],
            data: [
                ["5e60cb55c4aabe1c30c08af4", "4ue3b8", 417, "7tt8bo", <button></button>],
            ]
        }

        let today = new Date();
        let { getByTestId } = render(<SpentHistory data={data} onFiltered={onFiltered} isFilterApplied={isFilterApplied} startDate={today} endDate={today} setStartDate={setStartDate} setEndDate={setStartDate}>
        </SpentHistory>);

        fireEvent.click(getByTestId(/toggleAdvanceFilter/i));
        waitForDomChange();
        fireEvent.click(getByTestId("applyadvfilter"));
        expect(isFilterApplied).toBeCalled();

    });


    it("should reset filter", () => {
        let onFiltered = jest.fn();
        let isFilterApplied = jest.fn();
        let setStartDate = jest.fn();
        let data = {
            headers: ["TransactionId", "Items Purchased", "Amount", "Merchant", ""],
            data: [
                ["5e60cb55c4aabe1c30c08af4", "4ue3b8", 417, "7tt8bo", <button></button>],
            ]
        }

        let today = new Date();
        let { getByTestId } = render(<SpentHistory data={data} onFiltered={onFiltered} isFilterApplied={isFilterApplied} startDate={today} endDate={today} setStartDate={setStartDate} setEndDate={setStartDate}>
        </SpentHistory>);

        fireEvent.click(getByTestId(/resetFilter/i));
        waitForDomChange();
        expect(onFiltered).toBeCalled();
        expect(setStartDate).toBeCalled();
        expect(isFilterApplied).toBeCalled();
    });
});
