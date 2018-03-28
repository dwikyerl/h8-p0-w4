/*
  Logic Challenge - Check AB
*/

/**
 * @param {String} str - an arbitrary string
 */

function checkAB(str) {
  let arr = str.split('')
  let aIndex = arr.indexOf("a");
  let bIndex = arr.indexOf("b");

  while (aIndex !== -1) {
    let tempArr = [...arr];
    while (bIndex !== -1) {
      let range = Math.abs(aIndex - bIndex);
      if (range === 4) return true;
      tempArr.splice(bIndex, 1, 'z');
      bIndex = tempArr.indexOf("b");
    }
    
    arr.splice(aIndex, 1, 'z');
    aIndex = arr.indexOf("a");
    bIndex = arr.indexOf("b");
  }

  return false;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB('bacon and meat')); // false
