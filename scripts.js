let todosList = {
  todos: [],
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
  },
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodo();
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function (position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function () {
    let totalTodos = this.todos.length;
    let completedTodo = 0;

    // improved method using callback fnc
    this.todos.forEach(function (todo) {
      if(todo.completed===true) {
        completedTodo++;
      }
    });
    this.todos.forEach(function (todo) {
      // Case 1
      if(completedTodo === totalTodos) {
        todo.completed=false;
      }
      // Case 2
      else {
        todo.completed=true;
      }
    });
  }
};


//methods on this object should handle different events
let handlers = {
  addTodo: function () {
    let addTodoTextInput = document.getElementById("addTodoTextInput");
    todosList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = ""; // clears the box after you click add
    view.displayTodo();
  },
  changeTodo: function () {
    let changeTodoPositionInput = document.getElementById(
      "changeTodoPositionInput"
    );
    let changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todosList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
    view.displayTodo();
  },
  deleteTodo: function (position) {
    todosList.deleteTodo(position);
    view.displayTodo();
  },
  toggleCompleted: function () {
    let toggleCompletedPositionInput = document.getElementById(
      "toggleCompletedPositionInput"
    );
    todosList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    view.displayTodo();
  },
  toggleAll: function () {
    todosList.toggleAll();
    view.displayTodo();
  },
};

let view = {
  //create an li element for every todo
  displayTodo: function () {
    let todosUl = document.querySelector("ul");
    todosUl.innerHTML = ""; //clear out unordered list before adding the new 'li' elements
    todosList.todos.forEach(function (todo, position) {
        let todoLi = document.createElement("li");
        let todoTextWithCompletion = "";

        if (todo.completed === true) {
          todoTextWithCompletion = "(x)" + todo.todoText; //strings can be combined with plus operator
        } else {
          todoTextWithCompletion = "( )" + todo.todoText;
        }

        todoLi.id = position;
        todoLi.textContent = todoTextWithCompletion;
        todoLi.appendChild(this.createDeleteButton());
        todosUl.appendChild(todoLi);
    }, this);
  },
  createDeleteButton: function () {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function () {
    let todosUl = document.querySelector("ul");
    todosUl.addEventListener("click", function (event) {

      //get the element that was cicked on
      let elementClicked = event.target;

      //check if element clicked is a delete button
      if (elementClicked.className === "deleteButton") {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id)); //position = id
      }
    });
  }
};

view.setUpEventListeners();
