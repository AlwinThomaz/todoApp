let todosList = {
    todos: ['item1', 'item2', 'item3'],
    displayTodo: function () {
        console.log('My Todo:', this.todos);
    },
    addTodo: function (todo) {
        this.todos.push(todo);
        this.displayTodo();
    },
    changeTodo: function (position, newValue) {
        this.todos[position] = newValue;
        this.displayTodo();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodo();
    }
};
// todosList.addTodo('Plunker')
// todosList.changeTodo(3, 'item4');
// todosList.deleteTodo(3, 1);