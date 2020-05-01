//data being changed form simple text value to objects
let todosList = {
    todos: [],
    displayTodo: function () {
        console.log('My Todo:', this.todos);
    },
    addTodo: function (todoText) {
        //adding objects
        this.todos.push({ //now pusing objects to our array (todos: [])
            todoText: todoText, //green todoText is just a property name 
            completed: false
        });
        this.displayTodo();
    },
    changeTodo: function (position, todoText) {
        //change todoText property
        this.todos[position].todoText = todoText; //the .todoText as now it is an object property up above {} & we want just the 1 property
        this.displayTodo();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodo();
    },
    toggleCompleted: function(position) {
        let todo =  this.todos[position];
        todo.completed = !todo.completed; //flips it to true here
        this.displayTodo();
    }
};

// todosList.addTodo('boolean testing');
// todosList.changeTodo('hello');
// todosList.toggleCompleted(0);