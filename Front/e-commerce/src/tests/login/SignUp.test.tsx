import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, test } from "vitest";
import SignUp from "../../components/login/SignUp";

beforeEach(async () => {
  render(<SignUp />);
});

afterEach(async () => {
  cleanup();
});

test("it should render the component", () => {
  const title = screen.getAllByText("Sign Up");
  const mail = screen.getAllByText("E-mail");
  const password = screen.getAllByText("Password");
  const passwordConfirmation = screen.getAllByText("Confirm password");
  expect(title).toBeDefined();
  expect(mail).toBeDefined();
  expect(password).toBeDefined();
  expect(passwordConfirmation).toBeDefined();
});
