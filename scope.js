if (true) {
  const data = 58;
  console.log('inside the if block:', data)
  doMath(88,99);
}
// console.log(data);

for (const num of [1, 2, 3, 4, 5]) {

}

// function scope or local scope 

fucntion doMath(a,b){
  console.log(a,b)
  const sum = a+b;
  const total = sum+10;
}