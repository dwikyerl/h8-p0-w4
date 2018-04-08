/*
  Logic Challenge - Tukar Besar Kecil
*/

/**
 * @param {String} kalimat - an arbitrary sentence
 */

function tukarBesarKecil(kalimat) {
  const arrSentence = kalimat.split('');

  for (let i = 0; i < arrSentence.length; i += 1) {
    const currentLetter = arrSentence[i];
    if (/[A-Z]/.test(currentLetter)) {
      arrSentence[i] = currentLetter.toLowerCase();
    } else if (/[a-z]/.test(currentLetter)) {
      arrSentence[i] = currentLetter.toUpperCase();
    }
  }

  return arrSentence.join('');
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
