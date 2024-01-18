const lib = require("../lib");

describe("absolute", () => {
  it("absolute - should return a possitive number if input is possitive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("absolute - should return a possitive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("absolute - should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Mosh");
    expect(result).toMatch(/Mosh/);
  });
});

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
  });
});

describe("getProduct", () => {
  it("should return the product with a given id", () => {
    const result = lib.getProduct(1);
    expect(result).toHaveProperty("id", 1);
  });
});

describe("registerUser", () => {
  it("should throw if username is falsy", () => {
    const args = [null, 0, NaN, "", false, undefined];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });

  it("should return a user object if valid username is passed", () => {
    const result = lib.registerUser("Ahbideen");
    expect(result).toMatchObject({ username: "Ahbideen" });
    expect(result.id).toBeGreaterThan(0);
  });
});
