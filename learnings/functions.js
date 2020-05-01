// //basic function structure
// function makeTurkeySandwich() {
//     //Get once slice of bread;
//     //Add turkey;
//     //Put a Slice of bread on top;
// }

// //call a function
// makeTurkeySandwich();

// //customize functions
// function makeSandwichWith(filling) {
//     //Get once slice of bread;
//     //Add filling;
//     //Put a Slice of bread on top;
// }
// // makeTurkeySandwich(ham);

// function sayHiToPerson(person) {
//     console.log('Hello', person);
// }

// sayHiToPerson('Alwin');

let todos = ['item1', 'item2', 'item3'];

function displayTodo() {
    console.log('My Todos:',todos);
}

function addTodo(todo) {
    todos.push(todo);
    displayTodo();
}

function changeTodo(position, newValue) {
    todos[position]=newValue;
    displayTodo();
}

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodo();
}


