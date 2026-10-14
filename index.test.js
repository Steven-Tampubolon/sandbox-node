const test = require("node:test");
const assert = require("node:assert");
const { greet, farewell } = require("./index");

test("greet", () => {
  assert.strictEqual(greet("Ani"), "Hello Ani");
});

test("farewell", () => {
  assert.strictEqual(farewell("Ani"), "Selamat tinggal Ani");
});
