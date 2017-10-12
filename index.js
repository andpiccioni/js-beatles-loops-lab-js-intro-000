var musician = ["John Lennon", "Paul McCartney", "George Morrison", "Ringo Starr"]
var instrument = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musician, instrument){
  var beatArray = []
  for(var i = 0; i < musician.length; i++){
    beatArray.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return beatArray
}





function iLoveTheBeatles(n){
  var emptArray = []
  var n = 0
  do {
    emptArray[n] = "I love the Beatles!";
    n++;
  }
  while (n < 15)
}
