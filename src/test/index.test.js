import { statement, add } from "../index.js";
import INVOICE from "../data/invoices.json";
import PLAYS from "../data/plays.json";

describe("index", () => {
  it("add", () => {
    expect(add(1, 2)).toEqual(3);
    // expect(1).toBe(1);
  });
  it("statement", () => {
    expect(statement(INVOICE[0], PLAYS)).toEqual({
      customer: "BigCo",
      totalAmount: 164000,
      volumeCredits: 47
    });
  });
});
