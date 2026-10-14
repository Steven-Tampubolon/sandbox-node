const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("./index");

test("greet", () => {
  assert.strictEqual(greet("Ani"), "Hello Ani");
});
