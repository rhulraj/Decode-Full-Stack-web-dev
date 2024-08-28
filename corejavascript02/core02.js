// 1. Ceate an arrow function called square that takes a number as an argument and returns its square. Use the arrow function to 
//calculate the square of a given number and display the result.

const num =2
const square = num => num*num;
 
let result = square(num);

console.log(`Square of ${num} =`,result)

console.log("");
console.log("");
console.log("");

// 02 The following is an array of 10 students ages:
// => const ages = [ 29,22,19,24,20,25,26,24,25,24]
// Sort the array and find the min and max age.
// Find the median age(one middle item or two middle items divided by two
// Find the average age(all items divided by number of items
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() 

//ans 
const ages = [ 29,22,19,24,20,25,26,24,25,24];

const sortedAges = ages.sort();

const minAge = sortedAges[0];
const maxAge = sortedAges[ages.length-1];

function median(arr){
    if (arr.length%2 === 0){
        const index = arr.length / 2 -1
        return `two middle items divided by two = ${(arr[index]+arr[index+1]) / 2}`
    }else {
        const index = ((arr.length + 1) /2 ) -1
        return ` one midlle item ${arr[index]}`
    }
}

const averageAge = ages.reduce((acc, curr) => acc + curr,0) / ages.length;

const range = maxAge - minAge;

const minMinusAvg = Math.abs(minAge - averageAge);
const maxMinusAvg =  Math.abs(maxAge -averageAge);
const averageVaule = `value of minMinusAvg = ${minMinusAvg} and value of maxMinusAvg = ${maxMinusAvg}`;

console.log('minAge =' , minAge);
console.log('maxAge =' , maxAge);
console.log(`median =`, median(sortedAges));
console.log('Average age' , averageAge);
console.log('range = ' , range);
console.log('compareVaule =', averageVaule)


//03 Create a Map to store contact infomation (name, age, email, location) and implement a function to retrieve contact details by name.

const arr = [
    {
        name: 'Rahul Raj',
        age:'20',
        email: 'rahul@gmail.com',
        location: 'hazaribag'
    },
    {
        name: 'Ayush',
        age:'23',
        email: 'ayush@gmail.com',
        location: 'ranchi'
    },
    {
        name: 'Robin',
        age:'30',
        email: 'robin@gmail.com',
        location: 'patna'
    },
]

const map = new Map()
arr.map((item)=>{ map.set(item.name,item) })

const Username = 'Rahul Raj';

const findUser = name => map.get(name);

console.log(findUser(Username))
 

// 04 Ceate two objects person1 and person2 with properties name and age. Create a function “introduce” that
//prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself
//using the introduce function.

//ans
const person1 = {
    name: 'Rahul Raj',
    age: 20
}
const person2 ={
    name: 'Ayush',
    age: 23
}

function introduce(obj){ 
    return `Hello, I'm ${obj.name} and I'm ${obj.age} years old`
}

const res = introduce(person2) //parameter should be object

console.log(res)


//. You are developing a program to manage a list of unique items. Write a JavaScipt progam that uses a
//Set to store a collection of unique numbers. Use the Map object to associate each number with its square.
//Finally, print both the unique numbers and their coesponding squares.

//ans
const arry = [1,4,5,2,5,8,1,6,7,3,2,7,8,90,1,23,67];

function uniqueNumSqr(arr){ 
    const uniqueItems = new Set(arry);
    const map = new Map()
    uniqueItems.forEach((value1,value2)  => map.set(value1, value2*value2));
    return map.entries();
}

console.log(uniqueNumSqr(arry));

console.log("");
console.log("");
console.log("");
// 6 Create a simple JavaScipt function named displayInfo h:at takes two parrametes (name and role) and logs a messageG
//Use call to invoke the displayInfo function with specific aguments.
//Use apply to invoke the displayInfo function with arguments passed as an array.
//Ceate another function named greet that logs a geeting with this context.
//Use bind to create a new function boundGeet with a specific context and log the greeting.

//ans
function displayInfo(personName,role){
    console.log(`His name is ${personName} and He is a ${role}`);
}

let person = {
    personName : "Rahul Raj",
    role : 'Web Developer'
};

displayInfo.call(null, person.personName, person.role); //call method help us to call the function and control what is this keyword 
// inside the function .Here null because we don't need  to pass any value this keyword

let per = ['Ayush Raj', 'Businessman'];
displayInfo.apply(null, per); //apply method is simillar to call method only difference is it takes argument in array


function greet(person){
    console.log(`Good morning, ${this.personName}`)
}
const boundGreet = greet.bind(person); // Here person bound to the greet function with their this value store that value 
// inside boundGreet variable, bind method needs to be invoked from the variable only.  

boundGreet();  //function created by using bind method

console.log("");
console.log("");
console.log("");
//7. Tasks:

//Create an object named calculator with methods add, subtract, and multiply,
//Implement the calculate method in the calculator object, which takes an operation ('add', 'subtact', or 'multiply') and two numbers.
//Use call to perfom an addition operation using the calculate method.
//Use apply to perform a multiplication operation using the calculate method with arguments as an array.
//Create another object named discountCalculator with a discount pecentage poperty and a method applyDiscount.
//Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and can be reused.

const calculator = {

calculate : function(operation, firstNum, secNum) {
    if (operation === 'add') {
        return firstNum + secNum;
    }else if (operation === 'subtract') {
        return firstNum - secNum;
    }else if (operation === 'multiply') {
        return firstNum * secNum;
    }else {
        return 'Invalid input'
    }
   }
}

let operation = 'add'

let cal = calculator.calculate.call(null, operation, 3, 4);
 console.log(`Addition : ` ,cal)

const multiply = ['multiply', 3 ,9 ]

cal = calculator.calculate.apply(null, multiply);
console.log('Multiplication', cal);

const discountCalculator = {
    discountPerentage : 25,
    totalAmount : 100,
    applyDiscount : function () {
           return  console.log(this.totalAmount - this.totalAmount /this.discountPerentage)
    }
}
const input = {
    discountPerentage : 30,
    totalAmount : 200,
}
const calculateDiscount = discountCalculator.applyDiscount.bind(input) // Here input bound to the appDiscount method with their this value  and store that value 
// inside calculateDiscount variable, bind method needs to be invoked from the variable only. new function created with the name calculateDiscount

calculateDiscount() // here invoke the calculateDicount method which are created by using bind method
