/*
  Logic Challenge - Digit Perkalian Minimum
*/

/*
  Problem :

  Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.
*/

/**
 * @param {Number} angka - an arbitrary number
 */

function digitPerkalianMinimum(angka) {
  let shortestPair = '';
  let limit = angka;

  for (let i = 1; i <= limit; i += 1) {
    const firstFactor = i;
    if (angka % firstFactor === 0) {
      const secondFactor = angka / firstFactor;
      limit = secondFactor;
      const pair = `${firstFactor}${secondFactor}`;
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
