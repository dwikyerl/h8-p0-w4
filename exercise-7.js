/*
  Logic Challenge - Digit Perkalian Minimum
*/

function digitPerkalianMinimum(angka) {
  let shortestPair = '';
  let limit = angka;

  for(let i = 1; i <= limit; i++) {
    let firstFactor = i;
    if (angka % firstFactor === 0) {
      let secondFactor = angka / firstFactor;
      limit = secondFactor;
      let pair = firstFactor + "" + secondFactor;
      if (shortestPair === '') shortestPair = pair;
      else if (pair.length < shortestPair.length) shortestPair = pair;
    }
  }

  return shortestPair.length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2