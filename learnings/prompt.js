var prompt = require('prompt');

 //
  // Start the prompt
  //
prompt.start();
 
  //
  // Get two properties from the user: username and email
  //
prompt.get(['Name', 'Age'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  Name: ' + result.Name);
    console.log('  Age: ' + result.Age);
});
