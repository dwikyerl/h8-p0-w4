/*
  Logic Challenge - Password Generator
*/

function changeVocals(str) {
  const table = {
    a: 'b',
    i: 'j',
    u: 'v',
    e: 'f',
    o: 'p',
    A: 'B',
    B: 'J',
    U: 'V',
    E: 'F',
    O: 'P',
  };

  return str.replace(/[aiueo]/gi, match => table[match]);
}

function reverseWord(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

function setLowerUpperCase(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (/[A-Z]/.test(char)) newStr += char.toLowerCase();
    else newStr += char.toUpperCase();
  }

  return newStr;
}

function removeSpaces(str) {
  return str.replace(/\s/g, '');
}

function passwordGenerator(name) {
  if (name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter';

  const process1 = changeVocals(name);
  const process2 = reverseWord(process1);
  const process3 = setLowerUpperCase(process2);
  const process4 = removeSpaces(process3);
  return process4;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
