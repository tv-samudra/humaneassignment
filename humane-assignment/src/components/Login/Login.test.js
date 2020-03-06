import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import Login from "./index";

describe(`Login`, () => {
    it("should be able to take a username", () => {
        let callback = jest.fn();
        let { getByPlaceholderText } = render(<Login callback={callback}></Login>);
        /**Input username */
        fireEvent.change(getByPlaceholderText(/username/i), { target: { value: 'username' } });
        expect(getByPlaceholderText(/username/i)).toHaveValue("username");
    });

    it("should be able to take a password", () => {
        let callback = jest.fn();
        let { getByPlaceholderText } = render(<Login callback={callback}></Login>);
        /**Input username */
        fireEvent.change(getByPlaceholderText(/password/i), { target: { value: 'password' } });
        expect(getByPlaceholderText(/password/i)).toHaveValue("password");
    })

    it("should be able to submit the form", () => {
        let callback = jest.fn();
        let { getByText } = render(<Login callback={callback}></Login>);
        /**Input username */
        fireEvent.click(getByText(/login/i));
        expect(callback).toBeCalled();
    })
});
