import { MonoText } from "../StyledText";
import { render, screen } from "@testing-library/react-native";
import React from "react";

it("renders correctly", () => {
  render(<MonoText>Hello</MonoText>);
  expect(screen.getByText("Hello")).toBeTruthy();
});
