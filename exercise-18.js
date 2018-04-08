/*
  Logic Challenge - Kali Terus (Rekursif)
*/

function kaliTerusRekursif(angka) {
  const str = `${angka}`;

  if (str.length === 1) return angka;

  return kaliTerusRekursif(parseInt(str[0], 10) * kaliTerusRekursif(parseInt(str.slice(1), 10)));
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
