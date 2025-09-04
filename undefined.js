/**
 * undefined  --->not define
*/


let money;
// console.log(money)


function total(a, b) {
  // console.log('value of parameter', a, b);
  // const sum = a+b;
  // console.log('total is:',sum)
  if (a === undefined || b === undefined) {
    return;
  }
  if (a && b) {
    const sum = a + b;
    return sum;
  }

}
// total(2)
// const result = total(2, 2);
// console.log('value of function:', result)
const result = total();
// console.log(result)

const phone = { name: 'vivo-m13', price: 19500 }
// console.log(phone.price)
// console.log(phone.color)

const bank = ['sonali', 'rupali', 'jamuna'];
delete bank[1];
console.log(bank)

console.log('type of undefined', typeof undefined)
console.log('type of null',typeof null);