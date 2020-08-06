//store
let todo =['item 1', 'item2', 'item3'];
console.log(todo);

//add
todo.push('item4');
console.log(todo);

//read
console.log(todo[3]);

//update
todo[3] = 'item4';
console.log(todo);

//delete
todo.splice(0, 1); //first is the element you want to delete & second number is how many you want to delete 
console.log(todo);

//check length
console.log(todo.length) // 3


const todoArray = ['item1', 'item2', 'item3', 'item4'];

typeof todoArray; // returns object

const mytodoList = [
    { name: 'Alwin', todo: 'item1' }
  ];
  
// Creation of Arrays
//Array Literals
const todo = [];
let todo =['item 1', 'item2', 'item3'];

// an array of objects
const todo = [
  { key:  1, key2: 2 },
  { key3: 3 }, 
  { key4: 4 }
];

// Array Constructor
const todo = new Array('item 1', 'item2', 'item3');
console.log(todo); // [ 'item 1', 'item2', 'item3' ]

