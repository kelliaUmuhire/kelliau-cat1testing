import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

test("renders buttons", () => {
  render(<App />);
  const btn1 = screen.getByText("Get Token");
  const btn2 = screen.getByText("Check Token");
  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();
});

it("matches snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

// import React from "react";
// import { mount } from "enzyme";
// import App from "./App";

// it("renders correctly", () => {
//   const wrapper = mount(<App />);
//   expect(wrapper.state("error")).toEqual(null);
// });
