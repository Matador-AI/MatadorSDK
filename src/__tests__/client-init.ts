import MatadorClient from "../MatadorClient";

describe("Init and use client", () => {
  test("matador should return a new instance of Client", () => {

    const client = new MatadorClient();
    expect(client).toBeInstanceOf(MatadorClient);
    
  });
});