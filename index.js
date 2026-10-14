function greet(name) {
  return "Hello " + name;
}

function farewell(name) {
  if (typeof name !== "string" || name === "") {
    throw new Error("Nama tidak valid");
  }
  return "Selamat tinggal " + name;
}

module.exports = { greet, farewell };
