// -------------------
// argument mane ekta jinish ja shudhu normal function e pabo, array function e pawya jabe na, er kaj hocce arrow function k call korar jonno joto gula arguments pathaw ba man decho toto gula k arguments name ekta jinish e pawya jabe, eta array na array like Object
// ---------------------------


function add (a,b){
  console.log(arguments) //arry like object
  const params = [...arguments];
  console.log(params.map)//map use korte parbo

}
  add(88,77,1,3,5,56,354,45,9)