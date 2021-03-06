/*
  Logic Challenge - Total Digit (Rekursif)
*/

function totalDigitRekursif(angka) {
  if (!angka) return 0;
  const str = `${angka}`;
  return parseInt(str[0], 10) + totalDigitRekursif(parseInt(str.slice(1), 10));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
