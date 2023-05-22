import { myFunc } from "./myFunc";

test("test myFunc", () => {
  expect(myFunc("text")).toBe("MyFunc result: text");
});
