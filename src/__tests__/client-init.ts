import MatadorClient from "../MatadorClient";

describe("Init and use client", () => {
    const client = new MatadorClient("test-api-key");
    test("it initializes MatadorClient instance", () => {
        expect(client).toBeInstanceOf(MatadorClient);
    });
});