let friends = ["jon", "matt", "harris"];

function logName(name) {
  console.log(name);
}

friends.forEach(logName);

//can also do

friends.forEach(function logName(name) {
  console.log(name);
});

//also

function forEach(myArray, myFunction) {
  for (let i = 0; i < myArray.length; i++) {
    myFunction(myArray[i]);
  }
}

forEach(friends, function (friend) {
  console.log(friend);
});

forEach(friends, logName);
