const fibonacci = function (n) {
  if (n <= 1) return n;

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + current; // prev and current from last iteration
    prev = current; // from last Iteration Step
    current = next;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
