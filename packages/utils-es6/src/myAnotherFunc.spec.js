import { myAnotherFunc } from "./myAnotherFunc";

test("test myAnotherFunc", () => {
  expect(myAnotherFunc("text")).toBe("MyAnotherFunc result: text");
});
