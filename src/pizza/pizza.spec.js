import { buildPizza } from "./pizza.ts";

describe("Pizza Utils", () => {
  test("should map topping to correct option", () => {
    expect(buildPizza(["pepperoni"], "large").Options.P).toEqual({
      "1/1": "1"
    });
  });

  test("should map size to correct option", () => {
    expect(buildPizza([], "medium").Code).toEqual("12SCREEN");
  });
});
