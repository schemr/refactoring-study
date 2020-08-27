import { basicWageAmount } from "../../../src/jin-2/ch6/client3";

test("통상임금", () => {
  expect(basicWageAmount).toEqual(95693);
});
