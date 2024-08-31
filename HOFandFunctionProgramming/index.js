//HOFandFunctionProgramming

//1. You are building an e-commerce website. Write a function that calculates the total price of a customer's
//order. You're given an array of items, each with a price property. Use the forEach method to iterate through
//the array and sum up the prices to get the total order amount.

const ordersList = [
    {name : "Laptop", price: 120000},
    {name : "Mobile", price: 70000},
    {name : "Mobile Charger", price: 1500},
    {name : "Laptop Charger", price: 10500},
]

function totalPrice(arr){    //This function will calculate total price by taking argument should be array
    let totalPrice = 0
    arr.forEach(item => {    // this forEach method is used to iterate over array  element ,it allow us to perform a specific function on 
                              // each element of an array 
        totalPrice += item.price   // this logic will calculate total price
    });
    return totalPrice;
}

const result = totalPrice(ordersList);  // here i  call the function and returned to  result variable by passing the orderList as an argument
console.log('total price ' , result);
 
console.log("")
console.log("")
console.log("")
// 2. In this challenge, your task is to create a function that generates a random number and prints it to the
//console every 2 seconds. The program should keep printing new random numbers indefinitely, with a 2-second delay between each number.
 
function generateRandonNum(){ // this function will generate Random Number 
     let res = Math.random()
     console.log(res)
};

setInterval(generateRandonNum,3000); // setInterval is a method that repeats a given function generateRandomNum at 3000 milliseconds 

// 3. You are given an array of expense objects representing monthly expenses. Each object has properties,
//amount and category. Use the map method to create a new array that includes the calculated tax for each expense.
// Assume a tax rate of 10%.

let expenses = [                 
    {amount: 100, category: "Utilities" },
    {amount: 200, category: "Groceries" },
    {amount: 50, category: "Entertainment" },
];

function callback(item){  // we define a function which will take item of an array as a parameter and  apply it to  each item of an array
   return {amount : item.amount + item.amount /10 , category: item.category} // return a new modified item
}

const calculatedTax = expenses.map(callback); // we are using map method over expenses and passing callback fuction as a parameter . 
//The map method creates a new array by applying the call back function to each element of original array;
//use return value to populate the the corresponding position in new array

console.log("calculatedTax" ,calculatedTax) // log the new array

// 4. Using the same array of expense objects, use the filter method to create a new array that includes only
//the expenses related to the category "Groceries."

const GroceriesCate = expenses.filter(item => item.category === "Groceries"); // filter method is used to filter the element present in 
//an array return a new array  filter method creates a new array by filtering element ehich is based on criteria

console.log(GroceriesCate);  // here array of filter element will assigned by roceriesCate it is filtered on the based of category.
console.log("")
console.log("")
console.log("")
// 5. Using the same array of expense objects, use the reduce method to calculate the total amount of all
//expenses.
//ans 
const totalAmount = expenses.reduce((accumulator, currValue)=> accumulator + currValue.amount, 0); // The reduce method iterates through 
   // the array and for each element, it apply the call function and update accumulator and storing result in the accumulator.

console.log(totalAmount); //the final value of accumulator is returned which is sum of all amount.

//6. You have a list of expenses, each with an amount and a category. Now, create a function named
//categorizeExpense that, based on the expense amount, returns either "High Expense" if it's more than 100, or
//"Low Expense" otherwise. Afterward, use this function along with the map method to generate a new array
//called categorizedExpenses, where each element represents the category for the corresponding expense in
//the original list. Finally, print out the categorizedExpenses array.

let Expenses = [
    {amount: 100, category: "Ulilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50, category: "Entertainment"},
]

function categorizeExpense(arr){
      const categorizedExpenses = arr.map((item)=> (item.amount > 100)? "High Expense": "Low Expense");
      return categorizedExpenses ;
}

console.log("Categorize Expenses:", categorizeExpense(Expenses))

// 7. Consider an array of numbers named originalNumbers with the values [2, 5, 8, 10, 3]. Your task is to use
// the forEach method to iterate through each element in the array. During the iteration, double the value of
// each number. After completing the iteration, display the modified array.

let originalNumbers = [2, 5, 8, 10, 3];

let modifiedArray = []

originalNumbers.forEach((item)=> modifiedArray.push(item*item))  // push method will fill every double value of item in modifiedArray

console.log("modified array: "  ,modifiedArray);

//8. Using the same array of numbers, use the forEach method to collect and store only the even numbers in a
//new array.

let evenValue = [];

originalNumbers.forEach((item) => (item % 2 === 0)? evenValue.push(item): "");  

console.log("evenValue" ,evenValue)