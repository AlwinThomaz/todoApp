let students = ["jon", "matt", "harris"];

function logName(name) {
  console.log(name);
}

students.forEach(logName);

//can also do

students.forEach(function logName(name) {
  console.log(name);
});

//also

function forEach(myArray, myFunction) {
  for (let i = 0; i < myArray.length; i++) {
    myFunction(myArray[i]);
  }
}

forEach(students, function (student) {
  console.log(student);
});

forEach(students, logName);
