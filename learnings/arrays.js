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
