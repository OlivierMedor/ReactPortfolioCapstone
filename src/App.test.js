import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

test("App renders ", () => {
  // render the App component
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // save the heading in a variable
  const seatsAvailableHeading = screen.getByTestId("seatsAvailable");

  // save the button in a variable
  // const btn = screen.getByTestId("addOne");

  // click the btn
  // fireEvent.click(btn);

  // test assumption
  expect(seatsAvailableHeading).toHaveTextContent("Seats Available");
});
