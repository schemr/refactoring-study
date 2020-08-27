import { basicWageAmount } from "../../../src/original/ch6/client3";

test("통상임금", () => {
  expect(basicWageAmount).toEqual(95693);
});
