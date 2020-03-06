import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';
import ContactItem from "./ContactItem";

describe(`ContactItem`, () => {
    it("should render passed data", () => {
        let data = { name: "Sam", title: "MERN", company: "TechVariable", address: "Chandmari", industry: "IT" }
        let { getByTestId } = render(<ContactItem data={data}></ContactItem>);
        expect(getByTestId("name")).toHaveTextContent(data.name + " (" + data.title + ")");
    });
});
