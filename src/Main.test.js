import { render } from "@testing-library/react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./components/Header/Header";
import Main from "./Main";

configure({ adapter: new Adapter() });

test("renders Header", () => {
  const { container } = render(<Main />);
  const header = container.querySelector(".Header");
  expect(header).toBeDefined();
});

test("renders SideNav", () => {
  const { container } = render(<Main />);
  const sideNav = container.querySelector(".SideNav");
  expect(sideNav).toBeDefined();
});

test("renders Content", () => {
  const { container } = render(<Main />);
  const content = container.querySelector(".Content");
  expect(content).toBeDefined();
});

test("renders Footer", () => {
  const { container } = render(<Main />);
  const footer = container.querySelector(".Footer");
  expect(footer).toBeDefined();
});

test("header always on top", () => {
  // const wrapper = mount(<Main />);
  // const header = wrapper.get(0).props;
  // console.log(header);
  // expect(wrapper.get(0).props.style).toHaveProperty("position", "fixed");
});
