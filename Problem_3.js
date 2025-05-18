function generateOddUpToA(a) {
  let result = [];
  
  for (let i = 1; i <= a; i += 2) {
    result.push(i);

  }
  return result.join(", ");
}

console.log(generateOddUpToA(6));

