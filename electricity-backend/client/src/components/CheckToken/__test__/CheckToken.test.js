import { render, screen } from "@testing-library/react";
import CheckToken from "../CheckToken";

test("renders ui elements", () => {
  render(<CheckToken />);
  const h1 = screen.getByText("Check Token");
  const btn1 = screen.getByText("Check Your Token");
  const inpt = screen.getByPlaceholderText(/Enter/);
  expect(h1).toBeInTheDocument();
  expect(btn1).toBeInTheDocument();
  expect(inpt).toBeInTheDocument();
});
