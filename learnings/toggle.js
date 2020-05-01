let todosList = {
  todos: [],
  displayTodo: function () {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      console.log("My Todo:");
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
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
  },
  toggleAll: function () {
    let totalTodos = this.todos.length;
    let completedTodo = 0;

    //get number of completed todos
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodo++;
      }
    }
    //Case 1 - If everything's true, make everything false
    if (completedTodo === totalTodos) {
      //=== when both terms should be identical
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false; //if assigning osmehting then just 1 equal
      }
      //Case 2 - Otherwise, make everything true
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodo();
  },
};
