/*
  Logic Challenge - Mencari Modus
*/

/**
 * @param {Object[]} arr - an array that contains 2 or more numbers
 */

function cariModus(arr) {
  const modeObj = {};

  // loop through the array an count each number appearance
  for (let num of arr) {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  }

  // total unique numbers in the array
  const totalNumber = Object.keys(modeObj).length;

  // if there is only one number in array return -1;
  if (totalNumber === 1) return -1;

  // set mode and maximum frequencey
  let mode;
  let maxFrequency = 0;

  for (let num in modeObj) {

    // if the current number frequency greater than 1 and 
    // greater than current maximum frequency then assign it
    if (modeObj[num] > 1 && modeObj[num] > maxFrequency) {
      mode = +num;
      maxFrequency = modeObj[num];
    }
  }

  // if mode is undefined because each number only appear once return -1 
  // otherwise return the mode
  return mode === undefined ? -1 : mode;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1