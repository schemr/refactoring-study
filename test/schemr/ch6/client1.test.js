import { basicWage } from "../../../src/schemr/ch6/client1";

test("client1:통상임금", () => {
  expect(basicWage).toEqual(95693);
});
