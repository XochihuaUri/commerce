import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, test } from "vitest";
import LoginPanel from "../../components/login/LoginPanel";

beforeEach(async () => {
  render(<LoginPanel />);
});

afterEach(async () => {
  cleanup();
});

test("it should render the component", () => {
  const title = screen.getAllByText("Free commerce web");
  const img = screen.getByTestId("login-img");
  expect(title).toBeDefined();
  expect(img).toBeDefined();
});
