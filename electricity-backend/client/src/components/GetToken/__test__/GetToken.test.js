import { render, screen } from "@testing-library/react";
import GetToken from "../GetToken";

test("renders ui elements", () => {
  render(<GetToken />);
  const h1 = screen.getByText("Get A Token");
  const btn1 = screen.getByText("Get token");
  const inpt1 = screen.getByPlaceholderText(/Enter mo/);
  const inpt2 = screen.getByPlaceholderText(/Enter meter/);
  expect(h1).toBeInTheDocument();
  expect(btn1).toBeInTheDocument();
  expect(inpt1).toBeInTheDocument();
  expect(inpt2).toBeInTheDocument();
});
