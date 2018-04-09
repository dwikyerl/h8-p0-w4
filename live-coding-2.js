/*
==================================
Array Mastery: Group Odd Evens
==================================
Nama:________
[INSTRUKSI]
Function groupOddEven akan menerima satu parameter berupa array yang berisi number.
Function akan mengelompokkan setiap number yang ganjil (odd) dan setiap number yang genap (even),
dan akan mereturn sebuah string dengan format berikut:
"ODDS: <OddNum1>,<OddNum2>,<OddNum3> EVENS: <EvenNum1>,<EvenNum2>,<EvenNum3>"
aturan:
  - Apabila tidak ada angka ganjil, hanya tampilkan:
  "EVENS: <EvenNum1>, <EvenNum2>"
  - Apabila tidak ada angka genap, hanya tampilkan:
  "ODDS: <OddNum1>, <OddNum2>"
  - Apabila tidak ada angka sama sekali, tampilkan string kosong!
  - Angka tidak perlu diurutkan!
  
[CONTOH]
input: [1, 5, 8, 2, 3]
output: "ODDS: 1, 5, 3 EVENS: 8, 2"

input: [1, 1, 1]
output: "ODDS: 1, 1, 1"

input: [2, 8, 10]
output: "EVENS: 2, 8, 10"

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
  dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
*/

/*
  PSEUDOCODE :

  STORE students with an array of numbers
  IF length of students is 0 THEN
    RETURN '';
  ENDIF
  
  STORE odds with an empty array
  STORE evens with an empty array

  FOR each number of students
    IF number modulo 2 is 0 THEN
      PUSH number to evens array
    ELSE THEN
      PUSH number to odds array
    ENDIF
  
  STORE oddsStr with odds array converted to string and each number separated by a comma
  STORE evensStr with evens array converted to string and each number separated by a comma
  STORE output with value of an empty string

  IF length of odds array > 0 THEN
    CONCAT output with 'ODDS: ' + oddsStr + ' '
  ENDIF
  
  IF length of evens array > 0 THEN
    CONCAT output with 'EVENS: ' + evensStr
  ENDIF

  RETURN output
*/

function groupOddEven(students) {
  if (students.length === 0) return '';

  const odds = [];
  const evens = [];

  for (let i = 0; i < students.length; i += 1) {
    if (students[i] % 2 === 0) evens.push(students[i]);
    else odds.push(students[i]);
  }

  const oddsStr = odds.join(', ');
  const evensStr = evens.join(', ');
  let output = '';

  if (odds.length > 0) output += `ODDS: ${oddsStr} `;
  if (evens.length > 0) output += `EVENS: ${evensStr}`;

  return output;
}

// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
console.log(groupOddEven([])); // ""
