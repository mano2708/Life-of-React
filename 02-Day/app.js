// Objects in JavaScript

// Create an empty object

let object_1 = {  name: "Manoj",
    age: 21,
    city: "New York",
    degree: "B.Tech"}

console.log(object_1);
console.log(object_1.name);
console.log(object_1.age);
console.log(object_1.city);
console.log(object_1.degree);

// Objects can have their own set of function called methods

let person = {  firstName: "Mohamed",
                lastName: "Rasheq",
                age: 21,
                city: "Washington DC",
                isStudent: function () {
                    console.log(`${this.getPersonFullName()} is a student`);
                },
                getPersonFullName: function () {
                    return this.firstName + " " + this.lastName;
                },
                
};

console.log(person);
console.log(person.getPersonFullName());
person.isStudent();

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person))


// Functions in JavaScript 
// Function declaration can be done in the following ways

// Normal Declaration


function printSomething(...args) {      // The "..." in the arguments is the rest operator to get n number of arguments as a single array
    console.log(...args);                // The "..." in the console.log() is used to spread the received array of agruments into individual argument
}


printSomething("This is About function declaration");
printSomething("This is another print statement","with multiple","Arguments");

// Function Expression


const area = function(length,breadth) {
    return length*breadth;
}

console.log("Area : "+area(12,21));
//  Arrow Function

const cube = (length,breadth,height) => {
    return length*breadth*height;
}

console.log("Cube : ",cube(12,21,10));

// Higher Order Function

// Function which take other functions as parameter is called Higher order function
// Function which are passed as parameters are called callback functions

function func1 ( callback, arg3){
    let temp = callback("arg1","arg2");
    return temp + " " + arg3;
}


console.log(func1((arg1,arg2) => { return  arg1 + " " + arg2},"arg3"));

// Timer functions in JavaScript

// setTimeout() delays the executoin of the code within the callback function

function timer1 () {
    setTimeout(() => {
        console.log("timer ends");
        clearInterval(interval);
    },3000)
}


// timer1();
// console.log("timer starts");

//  setTimeInterval() exectutes the block of code in a particular interval.

// const interval = setInterval(() => {
//     console.log("interval started ")
// }, 1000);


// Array and Object Destructing in JavaScript

// Access Array elements using loops.

let names = [   "Manoj",
                "Rasheq",
                "Kanbilan",
                "Ashwanth",
                "Arun"
            ]

for (let name of names ){
    console.log(name);
}

// Accessing Array elements using Array Destructing.

let [ name1 , name2 , name3 , ...otherNames ]  = names;

console.log(name1);
console.log(name2);
console.log(name3);
console.log(otherNames);

// Object Destructing 

let employee = {    fullname: "Manoj",
                    age: 21,
                    salary: 22000,
                    City: "New York",
                    company: "Google LC.,",
}

let { fullname: name , age , salary , City } = employee;

console.log(name);
console.log(age);
console.log(City);
console.log(salary);


// Spread oprator in JavaScript 

let frontEnd = ["HTML", "CSS", "JavaScript", "React"];
let backEnd = ["Node JS", "Express", "MongoDB"];

let fullStack = [...frontEnd, ...backEnd]

console.log(fullStack);

const book = {
    title: "My Book Is Awsome",
    author: "MANOJ V",
    publisher: "Technical Publication"
}

console.log(book);

const modifiedBook = { ...book, title:"MY BOOK IS AWSOME"};

console.log(modifiedBook);








// Functional Programming in JavaScript

// forEach()

let unfilteredArray = [12,221,44,54,23,5,65];

console.log("forEach function");
unfilteredArray.forEach(forEachFunc);   //  Takes three arguments the current element, index of the current element, and the whole array.


function forEachFunc(item, index, arr){
    console.log(arr[index], item);
}

// map()

console.log("Map function");
unfilteredArray.map(mapFunc);       //  Takes two  arguments the current element and the index of the current element.


function mapFunc(item , index ){
    console.log(item,index);
}

// filter()

console.log("Filter Function")
console.log(unfilteredArray.filter(filterFunc));    // Takes one argument the current element.

function filterFunc(item){
    if (item >20){
        return item;
    }
}

// reduce() 

console.log(unfilteredArray.reduce(reduceFunc));    //  Takes two arguments the result of the previous func call and the current element.

function reduceFunc(sum, current){
    sum+=current;
    return sum;
}

// find()

console.log(unfilteredArray.find((n) => n%2 !== 0));    // Takes a single argument and return the element if the condition is true and exits the function else travrse till the end.


// findIndex()

console.log(unfilteredArray.findIndex( (n) => n%2 !== 0 ));     // Takes a single argument and return the index of the element if the condition is true and exits the function else travrse till the end.


// some()

console.log(unfilteredArray.some( (n) => n%21 === 0 ));   // Takes one argument and return true if any one of the element satisfy the condition else return false.


// every() 

console.log(unfilteredArray.every( (n) => n%2 === 0));     // Takes one argument and return true if all element satisfy the condition else return false.



// Classes in JavaScript

// Creating a class

class JavaScriptClass{

    // Constructors in JavaScript
    constructor (name,age,address){
        this.name= name;
        this.age= age;
        this.address= address;
    }

    getAge(){
        return this.age
    }
    get GetAge(){
        return this.age
    }


    setAge(age){
        this.age+=age;
    }

    set SetAge(age){
        this.age+=age;
    }

    display(...args) {
    console.log(...args);        
    }
}

const javascriptObj = new JavaScriptClass("Manoj",21,"Queens street, New York");

console.log(javascriptObj);
console.log("Name : \t"+javascriptObj.name);
console.log("Age : \t"+javascriptObj.age);
console.log(javascriptObj.display("Details : \t",`My Name is ${javascriptObj.name}`,"I am from GCEE"));

console.log(javascriptObj.GetAge);
console.log(javascriptObj.getAge());
console.log(javascriptObj.age);

console.log("Before setter")

javascriptObj.SetAge = 1;
console.log(javascriptObj.GetAge);
console.log(javascriptObj.getAge());
console.log(javascriptObj.age);
console.log("After setter");

javascriptObj.setAge(1);

console.log(javascriptObj.GetAge);
console.log(javascriptObj.getAge());
console.log(javascriptObj.age);



// Inheritance in JavaScript

class ParentClass {
    constructor (name, age, education){
        this.name= name;
        this.age= age;
        this.education = education;
    }
    getGradeInfo(){
        return `${this.name} is ${this.age} old and is studying ${this.education}`
    }
}

class ChildClass extends ParentClass{
    constructor(name,age,education,cgpa,...grades){
        super(name,age,education);
        this.grades= grades;
        this.cgpa = cgpa;
    }
    getGradeInfo(){
        console.log(super.getGradeInfo());
        return `${this.name} has a CGPA of ${this.cgpa}%`
    }

}

let childObj = new ChildClass("Manoj",21,"B.Tech IT",8.5,"A+","A","A+","B+","O");

console.log(childObj.getGradeInfo());


// Finally to the MAIN concept of JAVASCRIPT
// Document Object Model in JavaScript.

// The main purpose of Javascript is to make a webpage responsive.
// To Make a webpage responsive we need to access the web page elements either using their id, class, or tag name.
// JavaScript provides a set of functions to do so.
// They are 
//      ==>  document.getElementById("Id_name");
//      ==>  document.getElementsByTagName("Tag_name");
//      ==>  document.getElementsByClassName("Class_name");
//      ==>  document.querySelector("Tag_name or Class_name");
//      ==>  document.querySelectorAll("Tag_name pr Class_name");
     

document.getElementById("box1").textContent = "BOX1";

document.getElementsByTagName("p")[2].style.backgroundColor = "#aebede";

document.getElementsByClassName("box2")[0].style.display = "none" ; 

