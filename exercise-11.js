/*
  Logic Challenge - Change Me!
*/

function changeMe(arr) {
  const now = new Date();
  const thisYear = now.getFullYear();

  for (let i = 0; i < arr.length; i += 1) {
    const output = {};
    for (let j = 0; j < arr[0].length; j += 1) {
      const birthYear = arr[i][j];
      switch (j) {
        case 0:
          output.firstName = arr[i][j];
          break;
        case 1:
          output.lastName = arr[i][j];
          break;
        case 2:
          output.gender = arr[i][j];
          break;
        case 3:
          output.age = birthYear && birthYear <= thisYear ? thisYear - birthYear : 'Invalid Birth Year';
          break;
        default:
      }
    }
    console.log(`${i + 1}. ${output.firstName} ${output.lastName}: `);
    console.log(output);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
