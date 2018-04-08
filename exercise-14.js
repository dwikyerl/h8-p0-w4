/*
  Logic Challenge - Most Frequent Largest Numbers
*/

function sorting(arrNumber) {
  if (arrNumber.length === 0) return arrNumber;

  const arr = [...arrNumber];
  for (let i = arr.length - 1; i >= 1; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function getTotal(arrNumber) {
  if (arrNumber.length === 0) return '';

  const highestNum = arrNumber[0];
  let counter = 1;
  for (let i = 1; i < arrNumber.length; i += 1) {
    if (arrNumber[i] === highestNum) counter += 1;
    else break;
  }

  return `angka paling besar adalah ${highestNum} dan jumlah kemunculan sebanyak ${counter} kali`;
}

function mostFrequentLargestNumbers(arrNumber) {
  const listSort = sorting(arrNumber);
  const countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
// 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// 'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// 'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
// ''
