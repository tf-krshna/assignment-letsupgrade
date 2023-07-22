const readline = require('readline');

function findMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input must be a non-empty array of numbers.");
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findMaxFromInput() {
  rl.question("Enter a list of numbers separated by spaces: ", (inputString) => {
    const numbersArray = inputString.split(" ").map((num) => parseFloat(num));

    try {
      const maxNumber = findMax(numbersArray);
      console.log("The maximum number is:", maxNumber);
    } catch (error) {
      console.error(error.message);
    }

    rl.close();
  });
}

findMaxFromInput();
