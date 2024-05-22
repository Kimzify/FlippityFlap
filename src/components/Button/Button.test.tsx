import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button Component", () => {
  test("should render correct children", async () => {
    render(<Button title="hello" />);
    expect(screen.getByText("hello")).toHaveTextContent("hello");
  });
  test("should have red color on hover", async () => {
    render(<Button title="hello" />);

    await userEvent.hover(screen.getByText("hello"));

    expect(screen.getByText("hello")).toHaveStyle("color: red");
  });
});
