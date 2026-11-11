// function add and return sum of two numbers
function add(a, b) {
  return a + b;
}

// function subtract and return difference of two numbers
function subtract(a, b) {
  if (a > b) {
    return a - b;
  }
  return b - a;
}

function main(args) {
  const [operation, ...values] = args;

  if (!["add", "subtract"].includes(operation) || values.length !== 2) {
    console.error("Usage: node index.js <add|subtract> <number> <number>");
    process.exitCode = 1;
    return;
  }

  const numbers = values.map(Number);
  if (values.some((value) => value.trim() === "") || numbers.some((number) => !Number.isFinite(number))) {
    console.error("Both arguments must be finite numbers.");
    process.exitCode = 1;
    return;
  }

  const result = operation === "add"
    ? add(numbers[0], numbers[1])
    : subtract(numbers[0], numbers[1]);

  console.log(result);
}

if (require.main === module) {
  main(process.argv.slice(2));
}

module.exports = { add, subtract };
