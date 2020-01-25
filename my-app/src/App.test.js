import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import * as rtl from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { add } from "./Dashboard";

test("ct: adding two numbers", () => {
  expect(add(1, 1)).toBe(2)
})
test("fake test :", () => {
  expect(false).toBeFalsy;
})
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
