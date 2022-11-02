const report = require("../src/report");

describe("report", () => {
  it("should throw an error: ArgumentError 'Input must be a comma-separated string' if input is not a string", () => {
    expect(() => report(123)).toThrow("Input must be a comma-separated string");
  });

  it("should return an empty string if input is an empty string", () => {
    expect(report("")).toBe("");
  });

  it("should return Green: 1", () => {
    expect(report("Green")).toBe("Green: 1");
  });

  it("should return Green: 2", () => {
    expect(report("Green, Green")).toBe("Green: 2");
  });

  it("should return Green: 1\\nAmber: 1", () => {
    expect(report("Green, Amber")).toBe("Green: 1\\nAmber: 1");
  });

  it("should return Green: 2\\nAmber: 1", () => {
    expect(report("Green, Green, Amber")).toBe("Green: 2\\nAmber: 1");
  });

  it("should return Green: 1\\nAmber: 2", () => {
    expect(report("Green, Amber, Amber")).toBe("Green: 1\\nAmber: 2");
  });

  it("should return Green: 1\\nAmber: 1\\nRed: 1", () => {
    expect(report("Green, Amber, Red")).toBe("Green: 1\\nAmber: 1\\nRed: 1");
  });

  it("should return Green: 2\\nAmber: 1\\nRed: 1", () => {
    expect(report("Green, Green, Amber, Red")).toBe(
      "Green: 2\\nAmber: 1\\nRed: 1"
    );
  });
});
