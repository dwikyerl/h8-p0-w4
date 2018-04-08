/*
  Logic Challenge - Ubah Huruf
*/

/*
  Problem :

  Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.
*/

/**
 * @param {String} kata - a string that you want to change
 */

function ubahHuruf(kata) {
  const word = kata.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newWord = '';

  for (let i = 0; i < word.length; i += 1) {
    const currentLetter = word[i];
    if (currentLetter === ' ') {
      newWord += currentLetter;
    } else {
      const currentIndex = alphabet.indexOf(currentLetter);
      const newIndex = currentIndex !== 24 ? currentIndex + 1 : 0;
      newWord += alphabet[newIndex];
    }
  }

  return newWord;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
