/*
  Logic Challenge - Hitung Huruf
*/

function hitungHuruf(kata) {
  const words = kata.toLowerCase().split(" ");
  const wordsObj = {};

  for (let word of words) {
    let modeObj = {};
    for (let letter of word) {
      if (!modeObj[letter]) modeObj[letter] = 0;
      modeObj[letter]++;
    }

    let counter = 0;

    for (let letter in modeObj) {
      if (modeObj[letter] > 1) counter++;
    }
    
    if (counter > 0) {
      wordsObj[word] = counter;
    }
  }

  if (Object.keys(wordsObj).length === 0) return -1;

  let mostFrequent;
  let maxFrequency = 0;
  for (let word in wordsObj) {
    if (wordsObj[word] > maxFrequency) {
      mostFrequent = word;
      maxFrequency = wordsObj[word];
    }
  }

  return mostFrequent;
}

// TEST CASES
console.log(hitungHuruf("Today, is the greatest day ever")); // greatest
console.log(hitungHuruf("I am a passionate developer")); // passionate
console.log(hitungHuruf("aku adalah anak gembala")); // adalah
console.log(hitungHuruf("rajin pangkal kaya")); // pangkal
console.log(hitungHuruf("mengayuh perahu di danau")); // danau
console.log(hitungHuruf("abcd abcd abcd abcd")); // danau
