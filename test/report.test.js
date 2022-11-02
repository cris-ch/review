const report = require("../src/report");

describe("report", () => {
  it("should return Green: 1", () => {
    expect(report("Green")).toBe("Green: 1");
  });

  it("should return Green: 2", () => {
    expect(report('Green, Green')).toBe("Green: 2");
  });

  it("should return Green: 1\\nAmber: 1", () => {
    expect(report('Green, Amber')).toBe("Green: 1\\nAmber: 1");
  });

  it("should return Green: 2\\nAmber: 1", () => {
    expect(report('Green, Green, Amber')).toBe("Green: 2\\nAmber: 1");
  } );
})