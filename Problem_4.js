function countMultiples(numbers) {
  let result = {};


  for (let i = 1; i <= 9; i++) {
    result[i] = 0;
  }


  for (let num of numbers) {
    for (let i = 1; i <= 9; i++) {
      if (num % i === 0) {
        result[i]++;
      }
    }
  }

  return result;
}

const inputList = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];

console.log("Output:", countMultiples(inputList));
