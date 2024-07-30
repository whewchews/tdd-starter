import { render, screen } from "@testing-library/react";
import helloStory from "./Hello.fixture";
import { expect, test } from "vitest";

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

test("render hello", () => {
  render(helloStory);
  expect(
    screen.getByRole("heading", { name: "Hello World!" })
  ).toBeInTheDocument();
});
