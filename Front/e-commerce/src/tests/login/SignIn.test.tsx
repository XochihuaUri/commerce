import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, test } from "vitest";
import SignIn from "../../components/login/SignIn";

beforeEach(async () => {
  render(<SignIn />);
});

afterEach(async () => {
  cleanup();
});

test("it should render the component", () => {
  const title = screen.getAllByText("Sign In");
  const mail = screen.getAllByText("E-mail");
  const password = screen.getAllByText("Password");
  expect(title).toBeDefined();
  expect(mail).toBeDefined();
  expect(password).toBeDefined();
});
