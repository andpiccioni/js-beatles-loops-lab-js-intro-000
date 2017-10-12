var musician = ["John Lennon", "Paul McCartney", "George Morrison", "Ringo Starr"]
var instrument = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musician, instrument){
  var beatArray = []
  for(var i = 0; i < musician.length; i++){
    beatArray.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return beatArray
}




function iLoveTheBeatles(i){
  var emptArray = []
  do {
    emptArray.push("I love the Beatles!");

    i++;
  }
  while (i < 15);
  return emptArray;
}
