//my computer is the object
//the stuff inside the {} is the properties of that object

// let myMacbook = {
//     operatingSystem : 'mac',
//     screenSize : '13 inches',
//     purchaseYear :  2018
// }

// console.log(myMacbook);
// console.log(myMacbook.operatingSystem);

// let alwin = {
//     name: 'Alwin',
//     sayName: function() { //can also have function sayName -> though this is un-needed as you call it using the object property name anyway-> example of an annonymous function as it does not have a name
//         console.log(this); //to reference the object that we are on you use this
//         //when you use this inside of a func that is inside of an object 'this' will refer to that (entire) object
           //-> when you do the above it is called a Method -> a method is simply a property that is equal to a function ->
           //-> (sayName is a method on the gordon object).
//     }
// }

// console.log(alwin.sayName());

let alwin = {
    name: 'Alwin',
    sayName: function() { 
        console.log(this.name); //this.'property name' will print out just the property value and not the entire object
        
    }
}

console.log(alwin.sayName());