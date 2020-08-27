import { basicWage, bonus } from "../../../src/mwc/ch6/client2";

describe("Client 2 통상임금, 연차수당", () => {
  test("통상임금", () => {
    expect(basicWage).toEqual(95693);
  });
  test("연차수당", () => {
    expect(bonus).toEqual(1435395);
  });
});
