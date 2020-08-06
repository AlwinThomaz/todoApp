
const todoList = ["item1", "item4", "item5", "item7", "item3", "item8", "item1", "item9"];
const completedTodo = ["item3", "item7", "item1", "item12", "item9", "item5", "item24", "item16"];

function arrayDiff(array1, array2) {
  // 1 - Create empty string to be returned
  let newTodoArray = [];

  // 2 - Function that finds unique element in regards to the other array
  function uniqueElement(first, second) {
    // 3 - Loop through an array
    for (let element of first) {
      // 4. If a second array doesn't have element from a first
      if (second.indexOf(element) === -1) {
        // 5. Add unique element to the new array
        newTodoArray.push(element);
      }
    }
    console.log(newTodoArray)
  }
  // 6. Run function twice for both arrays
  uniqueElement(array1, array2);
  uniqueElement(array2, array1);
  // 7. Return final array
  return newTodoArray;
}

console.time('Start Algo 1');
console.log(arrayDiff(todoList, completedTodo));
console.timeEnd('Start Algo 1'); // Start Algo 1: 10.502ms

