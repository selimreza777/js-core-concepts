// function multiply(x, y) {
//   x = x + 5;
//   y = y + 5;
//   const mul = x * y;
//   return mul;
// }
// const a = 4;
// const b = 5;
// console.log('before the function call:', a, 'and', b)
// const result = multiply(a, b);
// console.log(result);
// console.log('after the function call:', a, 'and', b)

//-----------------------
// ***note: non primitive values (object,array) are passed by reference
// ----------------------
const manik = { name: 'manik', tk: 5678987 }
const roton = { name: 'roton', tk: 889687868 };
console.log('before call:', manik, roton);

function totalMoney(person1, person2) {
  person1.tk = 0;
  person2.tk = person2.tk / 2;
  const total = person1.tk + person2.tk
  return total;
}
const totalMoney2 = totalMoney(manik, roton)
console.log('total tk:', totalMoney2)

console.log('after function call:', manik, roton)
