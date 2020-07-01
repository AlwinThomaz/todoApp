let todosList = {
  todos: [],
  // displayTodo: function () {
  //   if (this.todos.length === 0) {
  //     console.log("Your todo list is empty!");
  //   } else {
  //     console.log("My Todo:");
  //     for (let i = 0; i < this.todos.length; i++) {
  //       if (this.todos[i].completed === true) {
  //         console.log("(x)", this.todos[i].todoText);
  //       } else {
  //         console.log("( )", this.todos[i].todoText);
  //       }
  //     }
  //   }
  // },
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

    //get number of completed todos
    // for (let i = 0; i < totalTodos; i++) {
    //   if (this.todos[i].completed === true) {
    //     completedTodo++;
    //   }
    // }
    // improved method using callback fnc
    this.todos.forEach(function (todo) {
      if(todo.completed===true) {
        completedTodo++;
      }
    });

    // //Case 1 - If everything's true, make everything false
    // if (completedTodo === totalTodos) {
    //   //=== when both terms should be identical
    //   // for (let i = 0; i < totalTodos; i++) {
    //   //   this.todos[i].completed = false; //if assigning something then just 1 equal
    //   // }
    //   this.todos.forEach(function (todo) {
    //     todo.completed = false;
    //   });
    //   //Case 2 - Otherwise, make everything true
    // } else {
    //   // for (let i = 0; i < totalTodos; i++) {
    //   //   this.todos[i].completed = true;
    //   this.todos.forEach(function (todo) {
    //     todo.completed = true;
    //   });
    // }

    //improved format
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

// old complex way
//get  access to do the display todos button
// let displayTodosButton = document.getElementById("displayTodosButton");
// let toggleAllButton = document.getElementById('toggleAllButton');

//run displayTodos method when someone clicks the button
// displayTodosButton.addEventListener("click", function () {
//   todosList.displayTodo();
// });

// toggleAllButton.addEventListener("click", function () {
//   todosList.toggleAll();
// });

//best practise
//methods on this object should handle different events
let handlers = {
  // displayTodo: function () {
  //   todosList.displayTodo();
  // },
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
    // let deleteTodoPositionInput = document.getElementById(
    //   "deleteTodoPositionInput"
    // );
    // todosList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    // deleteTodoPositionInput.value = "";
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
    // for (let i = 0; i < todosList.todos.length; i++) {
    //   let todoLi = document.createElement("li");
    //
    //   //each li element hould show .completed
    //   let todoTextWithCompletion = "";
    //   let todo = todosList.todos[i];
    //   if (todo.completed === true) {
    //     todoTextWithCompletion = "(x)" + todo.todoText; //strings can be combined with plus operator
    //   } else {
    //     todoTextWithCompletion = "( )" + todo.todoText;
    //   }
    //   todoLi.id = i; //each li has an id that has the todo position
    //   // each li element should contain .todoText
    //   todoLi.textContent = todoTextWithCompletion;
    //   // todoLi.textContent = todoList.todos[i].todoText; //sets it to the todoText property of each of the todos object inside of todos array
    //   todoLi.appendChild(this.createDeleteButton());
    //   todosUl.appendChild(todoLi);
    // }

    // this -> refers to the view object
    // forEach(callback, this) -> shown in the example below, from forEach({....}) is the entirety of the call back function
    // then you add a comma and do 'this' to reference the view object and utilise its properties
    // otherwise referencing 'this.' inside the callback function by itself does not work without having 'this' as -> forEach({....}, this)

    //improved method using callback fnc
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
    }, this); // check line 172 comment
  },
  createDeleteButton: function () {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function () {
    //event delegation -> listen for an event on a single item and then any items inside of the element ->
    // -> all the event handling is delegated to the parent element
    let todosUl = document.querySelector("ul");
    todosUl.addEventListener("click", function (event) {
      // console.log(event.target.parentNode) //getting delete buttons access to the todo id

      //get the element that was cicked on
      let elementClicked = event.target;

      //check if element clicked is a delete button
      if (elementClicked.className === "deleteButton") {
        //Run handlers.deleteTodo(position)
        // parseInt(elementClicked.parentNode.id); //parentNode.id is a string turn it into num by parseint
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id)); //position = id
      }
    });
  }
};

view.setUpEventListeners();
