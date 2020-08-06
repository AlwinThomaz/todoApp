
function todoList(name, item,) {
    this.name = name;
    this.item = item;
  
    this.printTask = function() {
      console.log('Hello, my name is ' + this.name + " and this is my todo item: " + this.item );
    }
  }
  
  var todoItems = new todoList('Alwin', 'Resolve bugs in my todo application');
  todoItems.printTask()       // "Hello, my name is Alwin and this is my todo item: Resolve bugs in my todo application"
  
  // When new todoList is called, a new object created and value of this is set to that object