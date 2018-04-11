
function countLetters(word) {

  //declare variables and remove spaces from string
  var noSpaces = word.split(" ").join("").toLowerCase()
  var splitLetters = []
  var counted = {}

  //push characters to array
  for (var i = 0; i < noSpaces.length; i++) {
    splitLetters.push(noSpaces[i])
  }
  // create properties for each letter present in array
  for (var i = 0; i < splitLetters.length; i++) {
   // console.log(splitLetters[i])
   counted[splitLetters[i]] = 0
 }
 // increment up value for each property found in array
 for(var i = 0; i < splitLetters.length; i++){
  if(counted.hasOwnProperty(splitLetters[i])){
    counted[splitLetters[i]] += `${[i]}, `
  }
}
  for(var keys in counted){
    counted[keys] = counted[keys].slice(0, -2)
  }


console.log(counted)
}
countLetters("lighthouse in the house")
//countLetters("Mikaal Matthew Naik")
//countLetters("Does dah function Freak out Over Capital cases")
