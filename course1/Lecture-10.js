// object literal
/*
let person = {
    firstName : "Soni",
    lastName : "Suhani",

    getFullName : function(){
        return `The FullName of the person is ${this.firstName} ${this.lastName}`;
    },

    getNumber: {
        mobile: "12345",
        landline: "45678"
    }

}

console.log(person.getFullName());
console.log(person.getNumber.landline);
*/



// object constructor


/*
function person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let person1 = new person("soni","suhani");
let person2 = new person("Shantanu","Shubham");

console.log(person1.firstName);
console.log(`${person2.firstName} ${person2.lastName}`);
*/


//object.create()

/*
const coder = {
    isStudying : 'false',
    printIntroduction: function(){
        console.log(`My name is ${this.name}. Am i studying? ${this.isStudying}`);

    },
}

const me = Object.create(coder);
me.name = "Soni Suhani";
me.isStudying = true;

me.printIntroduction();
*/


// classes in js 


/*
class vehicle{
    constructor(name,maker,engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }

    getDetails(){
        return `The name of the vehicle is ${this.name}`;
    }
}

let v1 = new vehicle("creta","Hyundai","2500cc");
let v2 = new vehicle("Q5","Audi","3000cc");

console.log(v1.name);
console.log(v2.maker);
console.log(v2.getDetails());
*/

/*
function Vehicle(name,maker,engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}

Vehicle.prototype.getDetails = function(){
    return `The name of the vehicle is ${this.name}. `
};

let v1 = new Vehicle("creta","Hyundai","2500cc");
let v2 = new Vehicle("Q5","Audi","3000cc");

console.log(v1.name);
console.log(v2.maker);
console.log(v2.getDetails());
*/
/*
class Person{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }

    addAdress(newAdress){
        this.address = newAdress
    }

    getDetails(){
        console.log(`This name is ${this.name} and adress is ${this.address}`);
    }

}

let person1 = new Person("soni", 23);
person1.addAdress("Phagwara");
person1.getDetails();
*/

//inheritance


class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getDetails = function(){
        return `The FirstName is ${this.firstName} and the last name is ${this.lastName}`;
    };
}

class Student extends Person{
    constructor(firstName,lastName,rollNumber){
        super(firstName, lastName);
        this.rollNumber = rollNumber;
    }

    getDetails = function(){
        return `The FirstName is ${this.firstName} and the last name is ${this.lastName} and the roll number is: ${this.rollNumber}`;
    }
    
}

let person1 = new Person("Shantanu","Shubham");

console.log(person1.firstName);
console.log(person1.getDetails());

let student1 = new Student("Soni","Suhani","20");
console.log(student1.getDetails());