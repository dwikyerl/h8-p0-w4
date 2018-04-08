/*
  Logic Challenge - Hitung Huruf
*/

/*
  Problem :
  
  Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.
*/

/**
 * @param {String} kata - an arbitrary word
 */

function hitungHuruf(kata) {
  const words = kata.toLowerCase().split(' ');
  const wordsObj = {};

  words.forEach(word => {
    const modeObj = {};

    for (let i = 0; i < word.length; i += 1) {
      if (!modeObj[word[i]]) modeObj[word[i]] = 0;
      modeObj[word[i]] += 1;
    }

    const modeWord = Object.keys(modeObj);
    let counter = 0;

    for (let i = 0; i < modeWord.length; i += 1) {
      if (modeObj[modeWord[i]] > 1) counter += 1;
    }

    if (counter > 0) {
      wordsObj[word] = counter;
    }
  });

  const selectedWords = Object.keys(wordsObj);

  if (selectedWords.length === 0) return -1;

  let mostFrequent;
  let maxFrequency = 0;
  selectedWords.forEach(word => {
    if (wordsObj[word] > maxFrequency) {
      mostFrequent = word;
      maxFrequency = wordsObj[word];
    }
  });

  return mostFrequent;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
console.log(hitungHuruf('abcd abcd abcd abcd')); // -1
