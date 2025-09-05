
//function er vitore function

// function counter() {
//   let count = 0;
//   function innerFunction() {
//     console.log('inside the inner functin, some one called me')

//   }
//   return innerFunction;

// }
// const ouput = counter();
// console.log(ouput())
// ----------------------------

function counter() {
  let count = 10;
  /// return korchi aro ekta function
  return function (user) {
    count = count + 1;
    console.log('inside the inner function',user, count)
  }
}
const innerFunc = counter()
// innerFunc()
// innerFunc()

// -------------------

const rahimCounter = counter();
rahimCounter('rahim')
rahimCounter('karim')
rahimCounter('borim')
rahimCounter('torim')
console.log(`---------------`)

// -------------------
const karimCounter = counter();
rahimCounter('karim')
rahimCounter('rahim')

const jabbarCounter = counter();
jabbarCounter('jabbar')
rahimCounter('rahim')
