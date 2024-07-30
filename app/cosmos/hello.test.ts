import { expect, test } from "vitest";

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

import { renderToString } from "react-dom/server";
import helloStory from "./Hello.fixture";
import { expect, test } from "vitest";

test("render hello", () => {
  document.body.innerHTML = renderToString(helloStory);
  expect(document.body.innerHTML).toBe("<h1>Hello World!</h1>");
});
