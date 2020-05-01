//for-loop -> repeat certain amount of code any number of times
// i = 0 // Initialization -> creation of the variable
// say hey if i < 3 // Condition -> the set condition
// increase i by 1 // Final-Expression -> happens after each round

//structure
// for (initialization, condition, final-expression) {

// }
for (let i = 0; i < 3; i++) { //i++ is the same as i = i + 1
    console.log('hey');
}
//looping over arrays
let testArray = ['item1', 'item2', 'item3', 'extra item'];
for (let i = 0; i < testArray.length; i++) { //arrays have innate length property
    console.log(testArray[i]);
}


let todosList = {
    todos: [],
    displayTodo: function () {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!');
        } else {
            console.log('My Todo:');
            for (let i = 0; i < this.todos.length; i++) {
                // console.log(this.todos[i].todoText); //this.todos[i] gives each property in the array
                //but we instead want the todoText property on each item in the array
                //check if completed is true
                if (this.todos[i].completed === true) {
                    //print with (x)
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    //print with ( )
                    console.log('( )', this.todos[i].todoText);
                }

            }
        }
    },
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodo();
    },
    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodo();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodo();
    },
    toggleCompleted: function (position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodo();
    }
};