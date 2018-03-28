/*
  Logic Challenge - Ubah Huruf
*/

/**
 * @param {String} kata - a string that you want to change
 */

function ubahHuruf(kata) {
  const word = kata.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newWord = '';

  for (let currentLetter of word) {
    if (currentLetter === ' ') {
      newWord += currentLetter;
      continue;
    }

    const currentIndex = alphabet.indexOf(currentLetter);
    const newIndex = (currentIndex !== 24) ? (currentIndex + 1) : 0;

    newWord += alphabet[newIndex];
  }

  return newWord;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
