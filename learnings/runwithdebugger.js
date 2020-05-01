function logTenNumbers() {
    for (i = 0; i < 10; i++) {
      console.log(i);
    }
  }
  
  function runWithDebugger (ourFunction) {
      debugger;
      ourFunction();
  }
  
  // to call this
  runWithDebugger(function logTenNumbers() {
      for (i = 0; i < 10; i++) {
          console.log(i);
        }
  });
  
  