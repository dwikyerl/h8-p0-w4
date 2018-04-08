/*
  Logic Challenge - Check AB
*/

/*
  Problem :

  Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.
*/

/**
 * @param {String} str - an arbitrary string
 */

function checkAB(str) {
  const arr = str.split('');
  let aIndex = arr.indexOf('a');
  let bIndex = arr.indexOf('b');

  while (aIndex !== -1) {
    const tempArr = [...arr];
    while (bIndex !== -1) {
      const range = Math.abs(aIndex - bIndex);
      if (range === 4) return true;
      tempArr.splice(bIndex, 1, 'z');
      bIndex = tempArr.indexOf('b');
    }

    arr.splice(aIndex, 1, 'z');
    aIndex = arr.indexOf('a');
    bIndex = arr.indexOf('b');
  }

  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
