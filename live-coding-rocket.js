/**
Array Merge
-----------
Mishima Zaibatsu mempunyai 2 mata-mata untuk mencari nama orang yang berpotensi untuk mengalahkan
Heihachi Mishima dan mengambil alih perusahaan miliknya. 2 mata-mata ini mengerjakan tugasnya
dengan baik, tetapi ada saatnya kedua data yang diberikan memiliki duplikat (nama yang sama).
Implementasikan function arrayMerge untuk menggabungkan 2 data yang diberikan kepada
Mishima Zaibatsu dan jangan sampai terdapat nama yang sama di data yang sudah tergabung tadi.
Contoh:
- input: ['kazuya', 'jin', 'lee'], ['kazuya', 'feng']
  output: ['kazuya', 'jin', 'lee', 'feng']
- input: ['lee', 'jin'], ['kazuya', 'panda']
  output: ['lee', 'jin', 'kazuya', 'panda']
Aturan coding:
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .concat()
- .indexOf() / .lastIndexOf() / .includes()
- .copyWithin()
*/

function arrayMerge(firstData, secondData) {
  if (firstData.length === 0 && secondData.length === 0) return [];

  const result = [];

  for (let i = 0; i < firstData.length; i += 1) {
    const data = firstData[i];
    for (let j = 0; j < secondData.length; j += 1) {
      if (data === secondData[j]) {
        secondData.splice(j, 1);
      }
    }

    result.push(data);
  }

  for (let i = 0; i < secondData.length; i += 1) {
    result.push(secondData[i]);
  }

  return result;
}

// Test cases

console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
// ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
// ['sergei', 'jin', 'steve', 'bryan']

console.log(arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));
// ['alisa', 'yoshimitsu', 'devil jin', 'law']

console.log(arrayMerge([], ['devil jin', 'sergei']));
// ['devil jin', 'sergei']

console.log(arrayMerge(['hwoarang'], []));
// ['hwoarang']

console.log(arrayMerge([], []));
// []
