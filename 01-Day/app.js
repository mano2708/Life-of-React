

function externalJs(){
  alert("This is external JavaScript");
}


// Variables in JavaScript

//  "let" is used to create varible once and the value can be assigned any number of times.

let a_number;


console.log(a_number); // OUTPUT : undefined

a_number = 10;

console.log(a_number); //OUTPUT : 10

// "cosnt" is used to create a varible once and the varible can be initialized during creation process itself..
// WE simply use const varibles in full uppperCase

const PI = 3.14159;

console.log(PI); // OUTPUT : 3.14159



// DataTypes in JavaSrcipt

// JavaScript has the a String DataType, a Number DataType, a bool DataType and other primary DataTypes similar to other lanuages.

// Arrays in JavaScript 

// create an empty array object

let array_1 = new Array();

console.log(array_1);  // OUTPUT : []

//  OR

let array_2 = Array();

console.log(array_2);  // OUTPUT : []

//  OR 

let array_3 = [];

console.log(array_3);  // OUTPUT : []

let friuts = ["apple","orange","pineapple","banana"];

console.log(friuts);

let numbers = [12,42,54,63,34,86];

console.log(numbers);
console.log(numbers.length);

// Array Functions in JavaScript

let students = ["Manoj","Kabilan","Rasheq","Ashwanth","Arun"];

students.forEach(student => {
  console.log(student);
});   // .forEach() is used to access each element in a javascript array
      // Here we use a Arrow function to print the each student in the students array

students = students.map(student => student.toUpperCase());  // Returns the manipulates value from the callback function
console.log(students);


// To get the first , middle and the last element of the array students

let middleIndex = Math.floor(students.length/2);

console.log(students[0]);
console.log(students[middleIndex]);
console.log(students[students.length-1]);

let mixedDataType = ["Manoj", 22, true,
                    ["subject name","Marks"],
                    ["Distributed Computing", "A+"],
                    ["Theory of Computation","A"],
                    ["Programming in C","A"]]

console.log(mixedDataType.length)




// Conditional Statements in JavaScript

//  There are three major types of conditional Statements in JavaScript

// "if() {
//    ...block of code... 
// } else {
//    ...block of code...
// }"


console.log("if Statement");

let student = "Manoj";
let isStudent = true;

if (isStudent){
  console.log(`${student} is a student`);
} else{
  console.log(`${student} is NOT a student`);
}

// "switch(value){
//    case value1:
//      ...block of code...
//    case value2:
//      ...block of code...
//    case value3:
//      ...block of code...
//    default:
//      ...block of code...
// }


console.log("Switch Statement");

let day= 4;

switch(day){
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Staturday");
    break;
  default:
    console.log("Enter a valid number")
                    
}

// finally to the ternary operator
// "expression ? statement 1 : statement 2"
// if expression is true then statement 1 will execute
// else statement 2 will execute




// Loops in JavaScript


// We mostly use two types loops in JS.
// They are 


// "for(){
//      ...block of code...
//  }"

let some_number = 5;

console.log("For Loop");

for (let i = 0 ; i < some_number ; i++){
  console.log(`${i}`);
}

// "while () {
//      ...block of code...
// }"

console.log("While Loop");

let i = 0;
while (i<5) {
  console.log(`${10-i}`);
  i++;
}

