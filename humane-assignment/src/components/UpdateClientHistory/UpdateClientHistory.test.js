import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import UpdateClientHistory from "./index";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe(`UpdateClientHistory`, () => {
  it("should call the callback", () => {
    let callback = jest.fn();
    let data={_id : "5e60cb55c4aabe1c30c08af4", itemPurchased : "4ue3b8", amount : 417, merchant : "7tt8bo" }
    let { getByTestId, getByPlaceholderText} = render(<UpdateClientHistory data={data} callback={callback}></UpdateClientHistory>);
   
    fireEvent.click(getByTestId(/submit/i));
    expect(callback).toBeCalled();
  });
  
   it("should render the valdataues passed", () => {
    let callback=jest.fn();
    let data={_id : "5e60cb55c4aabe1c30c08af4", itemPurchased : "4ue3b8", amount : 417, merchant : "7tt8bo" }
    let { getByTestId, getByPlaceholderText} = render(<UpdateClientHistory data={data} callback={callback}></UpdateClientHistory>);
    let itemPurchased = getByPlaceholderText(/item purchased/i);
    let _id = getByPlaceholderText(/id/i);
    let merchant = getByPlaceholderText(/merchant/i);
    let amount = getByPlaceholderText(/amount/i);

    expect(itemPurchased).toHaveValue(data.itemPurchased);
    expect(_id).toHaveValue(data._id);
    expect(merchant).toHaveValue(data.merchant);
    expect(amount).toHaveValue(String(data.amount));
  });
});
