/*

const x = (x,y)=>{
    return x + y;
}

const y = (x,y)=>x+y;

console.log(x(5,6))
*/

//spread oprator

/*
const q1 = ["jan", "feb", "mar"];
const q2 = ["apr", "may", "jun"];
const q3 = ["jul", "aug", "sept"];
const q4 = ["oct", "nov", "dec"];

const year = [...q1,...q2,...q3,...q4];

console.log(year);


const myNumbers = [25, 18 , -1 , 0 , 78 , 24];

let maxValue = Math.max(...myNumbers);

console.log(maxValue);

let sum = 0;
for(let num of myNumbers){
    sum = sum + num;
}

console.log(sum);

let name = "CipherSchools";
let text = "";
for(let ch of name){
    text +=ch + " ";
}
console.log(text);

*/

/*
const fruits = new Map([
    ["apples", 500],
    ["Bananas", 300],
    ["oranges", 400]
])

console.log(fruits);
console.log(fruits.get("Bananas"));


const letters = new Set();
letters.add('a');
letters.add('b');
letters.add('a');

console.log(letters);

*/

//classes
/*
class Car{
    constructor(name, mfgYear){
        this.name = name;
        this.mfgYear = mfgYear;
    }
}

const mycar1 = new Car("BMW",2018);
const mycar2 = new Car("Porsche", 2020);

console.log(mycar1,mycar2);
*/

//const promises

/*
const myFunction = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("This is inside promise");
            resolve();
        },2000)
    });
};

myFunction().
then(()=>{
    console.log("Resolved");
}).catch(()=>{
    console.error("Rejected");
})

*/

//Symbols in es6
/*
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 35,
    eyecolor: "blue"
}

let id = Symbol("id");
person[id] = 140111;

console.log(person);
*/

//default parameter in js
/*
const addTwoNumbers = (a,b=9)=>a+b;
console.log(addTwoNumbers(4));
*/

//Rest parameters
//here ... is rest parameter and can take infinite number of arguments from the user
const addNumbers = (...args)=>{
    let sum = 0;
    for(let arg of args){
        sum += arg;
    }
    return sum;
}

console.log(addNumbers(10,16,18,19,35,28,46,234,567,278,8378));