function exercise4() {
  // Exercise 4
  // Fix this program
  //
  // Expected Output
  // It should output the squares of all numbers between 0 and 12
  // eg:
  // 0, 1, 4, 9, 16, ...
  //
  // Edit only the code between the lines (below)
  // -----------------------------------------------------------------
for (let number = 0; number < 13; number++) {
  let exponent = 2;
  let square = Math.pow(number, exponent);
  console.log(square);
  }
  // -----------------------------------------------------------------
  // Edit only the code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-4

module.exports = exercise4;
