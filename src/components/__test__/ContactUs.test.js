import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import '@testing-library/jest-dom'

it("should be render H1 Tag : ", () => {
  render(<ContactUs />);

  //Quering
  const h1 = screen.getByRole("heading");

  //Assertions
  expect(h1).toBeInTheDocument();
});
