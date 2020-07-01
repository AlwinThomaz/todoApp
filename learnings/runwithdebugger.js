function logTenTodos() {
    for (i = 0; i < 10; i++) {
      console.log(i);
    }
  }
  
  function runWithDebugger (myFunction) {
      debugger;
      myFunction();
  }
  
  // to call this
  runWithDebugger(function logTenTodos() {
      for (i = 0; i < 10; i++) {
          console.log(i);
        }
  });
  
  