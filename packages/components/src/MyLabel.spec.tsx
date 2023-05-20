import React from "react";
import { render } from "@testing-library/react";
import { MyLabel } from "./MyLabel";

test("renders Label", () => {
  const { getByText } = render(<MyLabel text="test text"/>);
  const linkElement = getByText(/test text/i);
  expect(linkElement).toBeDefined();
});
