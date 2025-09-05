// callback 

//-------------------
// kono ekta function e chile parmeter hisabe alada ekta function pathano jai jake pathabo takei bole callback function

function pakhiBhai
  (callMeBack, patro, patri) {
  console.log('value of patro:', patro)
  // console.log('callMeBack parameter', callMeBack)
  if (patri) {
    // console.log(callMeBack)
    callMeBack(patro)
  }
  else {
    console.log('tor kopale biye nai')
  }
}
function callSomeOne(person) {
  console.log('calling', person)
}
// callSomeOne('jodu')
pakhiBhai(callSomeOne, 'jodu', 'modhu');