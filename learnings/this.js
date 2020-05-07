// Case 1 - > In a regular function (or if not in a function at all), this points to window.
// This is the defult case
function logThis() {
    console.log(this);
}
logThis(); // window
// In strict mode, `this` will be `undefined` instead of `window`.

// Case 2: When a function is called as a method,
// this points to the object that's on the left side of the dot.
var myObject = {
    myMethod: function() {
        console.log(this);
    }
};
myObject.myMethod(); // myObject
one.two.hi() // 'this' inside of hi will be two

// Case 3: In a function that's being called as a constructor,
// this points to the object that the constructor is creating.
function Person(name) {
    // every constructor starts with a brand new object which 'this' points to -> // this = {};
    this.name = name; //attaching properties to the empty object as said above here -> {name: }
    // this is returned at the end of the constructor -> return this;
}
var alwin = new Person('alwin'); //new indicates that the Person function is meant to be used as a constructor
// -> this is now equal to {name: 'alwin'}
console.log(alwin); // {name: 'alwin'}
console.log(this); // Person {name: 'alwin'}

// Case 4: When you explicitly set the value of this manually using bind, apply, or call,
// it's all up to you.
function logThis() {
    console.log(this);
}
// currently logThis() -> returns window -> can set this to something else using bind, apply or call

// bind
// -> method on functions -> returns a copy of the function where 'this'
// -> is set to the first argument passed into .bind()
logThis().bind(); // -> returns a copy of logThis() -> DOES NOT run the function
// -> where 'this' is set to the first argument passed into bind()
let explicitlySetLogThis = logThis().bind({name: 'alwin'}); // 'this' will be set to the alwin object
// so now explicitlySetLogThis(); returns -> Object {name: alwin} -> no longer window

//apply & call
logThis().apply({name: 'alwin'});
logThis().call({name: 'alwin'});
// apply & call both sets 'this' to the object but unlike bind they also immediately run it
// without passing in any arguments, apply & call behave the same way
function logThisWithArguments(greeting, name) {
    console.log(greeting, name);
    console.log(this);
}
//apply
logThisWithArguments().apply({name:'alwin'}, ['hi', 'alwin']); //hi and alwin refers to the arguments being passed into the logWithThis.. function

//call
logThisWithArguments().apply({name:'alwin'}, 'hi', 'alwin');// no array needed unlike apply

// Note that a function returned from .bind (like `boundOnce` below),
// cannot be bound to a different `this` value ever again.
// In other words, functions can only be bound once.
var boundOnce = logThis.bind({name: 'The first time is forever'});
// These attempts to change `this` are futile.
boundOnce.bind({name: 'why even try?'})(); // the () runs the functions since this is a bind
boundOnce.apply({name: 'why even try?'});
boundOnce.call({name: 'why even try?'});


// Case 5: In a callback function, apply the above rules methodically.
function outerFunction(callback) {
    callback();
}

function logThis() {
    console.log(this);
}

/*
 * Case 1: The regular old default case.
 */
outerFunction(logThis); // window

/*
 * Case 2: Call the callback as a method
 * (You'll probably NEVER see this, but I guess it's possible.)
 */
function callAsMethod(callback) {
    var weirdObject = {
        name: "Don't do this in real life"
    };

    weirdObject.callback = callback; // this adds a new property to the weirdObject and sets it to the callback thats being passed in as the argument
    weirdObject.callback(); // run the call back as a method
}
callAsMethod(logThis); // `weirdObject` will get logged to the console -> Object{name: "Don't do this in real life", callback: function}

/*
 * Case 3: Calling the callback as a constructor -> 'this' will point to new object the constructor is creating
 * (You'll also probably never see this. But in case you do...)
 */
function callAsConstructor(callback) {
    new callback();
}

callAsConstructor(logThis); // the new object created by logThis will be logged to the console -> logThis {}


/*
 * Case 4: Explicitly setting `this`.
 */
function callAndBindToAlwin(callback) {
    var boundCallback = callback.bind({name: 'alwin'});
    boundCallback();
}

callAndBindToAlwin(logThis); // {name: 'Gordon'}

// In a twist, we give `callAndBindToAlwin` a function that's already been bound.
var boundOnce = logThis.bind({name: 'The first time is forever'});
callAndBindToAlwin(boundOnce); // {name: 'The first time is forever'}

// NOTE! -> higher order function (HOF) dictates what 'this' will be as its the one calling the callback function
// thus all you have to do is inspect what the HOF does and figure out what it does and which of the cases (1-4) applies methodically.