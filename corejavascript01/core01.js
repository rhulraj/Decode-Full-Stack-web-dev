// //nodemon corejavascript01/core01.js
//Q1. Write a program that grades students based on their marks.
//ans
let marks = 91;

console.log("Answer of Q1")

if(marks > 90){  // if marks will be greater than 90 than output will be grade A 
    console.log("Student got grade A"); 

}else if(marks <= 90 && marks > 70){  // if marks is between 70 and 90 than output will be grade B  
    console.log("Student got grade B")   //By using if else ladder      

}else if(marks <= 70 && marks > 50){   // if marks is between 50 and 70 than output will be grade B
    console.log("Student got grade C")
    
}else{            // or marks is less than 50 out of 100 than it wiil print grade F
    console.log("Student got grade F")
}


// Q2. Generate numbers between any 2 given numbers.

const num1 = 10;
const num2 = 15;

let result = '';

for(let i = num1 + 1; i <= num2; i++){    
    
    result = result + " " + i  // it will print the result (output) in row direction or line
}

console.log( "Answer of Q2" , result);

// Q3. Use a nested ternary operator to check that a number is positive, negative or zero. You have to print
// “positive” if the number is positive and similarly for negative and zero also.

const number = -1;

const output = (number > 0) ? "Positive "  : (number < 0) ? "Negative": "Zero"

console.log(output)


// Q4. Describe the usage of the comma operator in JavaScript and provide an example.

//ans : In javascript we uses a comma (,) tp represent the comma oprator. A comma opertors take more than two operands , 
//evalutes them from left to right and returns the value of right operand.
// Here  example  below
let output1 = ("Rahul", "Ayush" ,"Raj")

console.log(output1);  //In this example we took an output1 variable "rahul", "Ayush", "Raj" which returns the value of the right operand which is "Raj"


//The most popular uses of the comma operator is in for loop to update variable 
//example

let odd= "";

let even = ""

let arr= [1,3,2,4,5,6,7,8,11,13,25,23];   // Array of numbers from which we have to collect odd and even seperately

for (let i = 1, j =1 ; i < arr.length; i++ , j++){   //Inside the loop , two variable are decleared : i and j is a counter that imcrement with each iteration.
      if (i % 2 != 0){
        odd += arr[i] + " "          //within loop an odd element appended to add string and even apended to even string
      }
      if(j % 2 == 0){
        even += arr[j] + " "     
      }
}
console.log("even" , even)  // output of even element in stinrg data type
console.log("odd" , odd)    // output of odd element in stinrg data type
 


//Q5. You're creating a basic login system. Make a login function with two things: a username and a
//password. Check if the username is "admin" and the password is "12375". If they're both correct, show "Login
//successful"; if not, show "Invalid credentials."

const usernameInp = "admin";    // usernameInp variable takes the  username  input of users and passwordInp for password input.

const passwordInp = "123456"

function login(username,password){                  // I defined a login function which takes username and password as aruments which 
                                                     //will check either username and password are credentials or not  and returns 
    if(username === "admin" && password === "123456"){
           return    "login successful" ;
    }else{
          return    "Invalid credentials";
    }
}

console.log(login(usernameInp,passwordInp)) // here invoked the login function by passing parameters of username = usernameInp and password = passwordInp



// Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment
//method ("credit", "debit", or "paypal") as input and uses a switch statement to determine and print the
//processing fee associated with each payment method. For example, "credit" may have a procesging fee of
//2%, "debit" 1.5%, and "paypal" 3%.

const payment_method = "paypal";

switch(payment_method){

    case "credit":
        console.log("you may  have processing fee of 2%");
        break;
    case "debit":
        console.log("you may have processing fee of 1.5%");
        break;
    case "paypal":
        console.log("you may have processing fee of 3%");
        break;
    default:
        console.log("Invalid input")
}



// Q7. You are building a weather application. Write a JavaScript program that takes the current temperature
//as input and uses the conditional (ternary) operator to determine and print the weather condition. If the
//temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate".

const temperature = 15 ;

function weather(temperatureInCelsuis){
     
    let weather = (temperatureInCelsuis > 30) ? "Hot" : "Moderate"
    return `Weather condition is ${weather}`;
}

console.log(weather(temperature));

console.log( " ")
console.log( " ")

//Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
//positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the given integer.


const Upto = 50; // Defined a variable  which will be taken by function as input .

function sum(Upto){
                        
        let sum = 0;   //This is  a function that takes a postive integer as input and uses
        let i = 0;                // a do-while to calculate and print the sum of all number from 1 to the given integer.
                         
        do {
            i++;
            sum += i;
        } while (i <= Upto)

        return sum
}

console.log(sum(Upto)) // return th e sum of all number from 1 to the given integer.