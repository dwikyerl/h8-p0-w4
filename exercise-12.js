/*
  Logic Challenge - Shopping Time!
*/

function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  else if (money < 50000) return 'Mohon maaf, uang tidak cukup';

  let tempMoney = money;

  const itemsList = {
    'Sepatu Stacattu': 1500000,
    'Baju Zoro': 500000,
    'Baju H&N': 250000,
    'Sweater Uniklooh': 175000,
    'Casing Handphone': 50000,
  };

  const result = {
    memberId,
    money,
    listPurchased: [],
    changeMoney: 0,
  };

  const items = Object.keys(itemsList);

  items.forEach(item => {
    const balance = tempMoney - itemsList[item];
    if (balance >= 0) {
      tempMoney = balance;
      result.listPurchased.push(item);
    }
  });

  result.changeMoney = tempMoney;

  return result;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
// { memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
// { memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); // Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); // Mohon maaf, uang tidak cukup
console.log(shoppingTime()); // //Mohon maaf, toko X hanya berlaku untuk member saja
