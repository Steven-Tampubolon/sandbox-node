const test = require("node:test");
const assert = require("node:assert");
const { greet, farewell } = require("./index");

test("greet", () => {
  assert.strictEqual(greet("Ani"), "Hello Ani");
});

test("farewell", () => {
  assert.strictEqual(farewell("Ani"), "Selamat tinggal Ani");
});

test("farewell dengan nama kosong", () => {
  assert.throws(() => farewell(""), {
    message: "Nama tidak valid",
  });
});

test("farewell dengan nama bukan string", () => {
  assert.throws(() => farewell(123), {
    message: "Nama tidak valid",
  });
});
