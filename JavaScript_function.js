// // Function 
// function functionName(parameters) {
//     // function body
//     // ...
//     return value
// }

// function say(message) 
// {
//     console.log(message);
// }

// // Calling function
// say(Hello)


// function add(a, b) 
// {
//     return a + b;
// }

// // Returning a value

// // with out returing value
// function say(message) {
//     console.log(message);
// }

// let result1 = say('Hello');
// console.log('Result:', result1);


// // with returen value
// function add(a, b) {
//     return a + b;
// }
// let sum = add(10, 20);
// console.log('Sum:', sum);

// //multiple return statements
// function compare(a, b) {
//     if (a > b) {
//         return -1;
//     } else if (a < b) {
//         return 1;
//     }
//     return 0;
// }

( function () {
    console.log("hello")
 }) ();
 
 let show = function() {
    console.log('Anonymous function');
};

show();

// Arrow functions
//  can be shortened using the following arrow function: for the above code.



let showagen = () => console.log('Anonymous function');


// global Variable

// program to print a text 
let a = "hello";

function greet () {
    console.log(a);
}

greet(); // hello


// program showing local scope of a variable
let a1 = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
console.log(a + b); // error