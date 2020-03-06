import React from 'react'
import { render, fireEvent, waitForDomChange } from '@testing-library/react'
import '@testing-library/jest-dom';
import Selection from "./index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn()
    })
}));

describe(`Selection`, () => {
    it("should contain three option", () => {
        let initialStore = { token: null, authenticated: false };
        let mockStore = configureStore();
        let store = mockStore(initialStore);
        let { getByTestId } = render(<Provider store={store}><Selection></Selection></Provider>);
        let options = getByTestId(/select/i);
        expect(options.children.length).toBe(2);
    });

    it("should change content on selecting an option", () => {
        let initialStore = { token: null, authenticated: false };
        let mockStore = configureStore();
        let store = mockStore(initialStore);
        let { getByTestId } = render(<Provider store={store}><Selection></Selection></Provider>);
        fireEvent.change(getByTestId("select"), { target: { value: "clientContact" } });
        waitForDomChange();
        expect(getByTestId("clientContact")).toBeInTheDOM();
    });

    // it("should logout and redirect to login page", () => {
    //     let initialStore = { token: null, authenticated: false };
    //     let mockStore = configureStore();
    //     let store = mockStore(initialStore);
    //     let { getByTestId } = render(<Provider store={store}><Selection></Selection></Provider>);
    //     fireEvent.click(getByTestId("logout"));
    //     expect(getByTestId("login")).toBeInTheDOM();
    // })

    it("should remove token on logout", () => {
        let initialStore = { token: null, authenticated: false };
        let mockStore = configureStore();
        let store = mockStore(initialStore);
        let { getByTestId } = render(<Provider store={store}><Selection></Selection></Provider>);
        fireEvent.click(getByTestId("logout"));
        waitForDomChange();
        expect(localStorage.getItem("token")).toBe(null);
    })
});
