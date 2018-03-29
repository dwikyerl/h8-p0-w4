/*
  Logic Challenge - Total Digit (Rekursif)
*/

function totalDigitRekursif(angka) {
  if (!angka) return 0;
  return (
    parseInt(("" + angka)[0]) +
    totalDigitRekursif(parseInt(("" + angka).slice(1)))
  );
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5