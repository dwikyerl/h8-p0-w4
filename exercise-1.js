/*
  Logic Challenge - Angka Prima
*/

/**
 * @param {Number} angka - a number that you want to test if it is prime number or not
 */

function angkaPrima(angka) {
  if(angka <= 1) return false;

  const limit = Math.floor(angka / 2);

  for (let i = 2; i <= limit; i++) {
    if (angka % i === 0) {
      return false;
    }
  }

  return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false