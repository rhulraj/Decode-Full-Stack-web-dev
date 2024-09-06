//ErrorHandling

// You are developing the error handling mechanism for an online shopping cart application. The
//application allows users to add products to their cart and proceed to checkout. Implement error
//handling to address different types of errors that might occur during the shopping process.

function addToCart(name, price, quantity){
    if(!name){
        throw 'Product name is required'
    }
    if(typeof price != 'number' || price < 0){
        throw 'Invalid product price'
    }
    if(typeof quantity != 'number' || quantity < 0){
        throw new Error('Invalid quantity')
    }
}
function checkout(){
    throw 'Cart is empty. Add items before checkout'
}
try{
    addToCart("Laptop", 1200, 2);
    addToCart("", 30, 1);
    addToCart("Mouse", -15, 3);
    addToCart("keyboard", 50, "abc");
     
    checkout()
} catch(error){
    console.log(error)
}


//A You are working on a user authentication module for a web application. Implement error handling for the
//login process.Create a function login that simulates the user login process. The function should take the
//username and password as parameters and throw errors under certain conditions#
//' If the username is not provided, throw an error indicating "Username is required.
//' If the password is not provided, throw an error indicating "Password is required.
//' If the username and password do not match any valid credentials, throw an error indicating "Invalid
//username or password."

function login(username, password){
    if(!username){
        throw new Error('Username is requires')
    }
    if(!password){
        throw new Error('password is requires')
    }
    if(username === "invalidUser" || password === "invalidPassword"){
        throw new Error('Invalid username or password')
    }
}

try{
    login("user123", "password123");
    login("", "password456");
    login("user456", "");
    login("invalidUser", "invalidPassword");
}catch(error){
    console.log(error.message);
}

//3 You are developing a payment processing module for an e-commerce platform. Implement error
//handling for the payment transaction process.Create a function processPayment that simulates
//processing a payment transaction. The function should take payment details (amount, card number,
//expiration date) as parameters and throw errors under certain conditions

function processPayment(amount, card_number, expir_date){
    if(!amount && amount < 0){
        throw new Error('Invalid Payment amount');
    }
    if(!card_number || card_number.length < 18){
        
       throw new Error("Invalid card number")
    }
    if(!expir_date || parseInt(expir_date.slice(3,5)) <= 24 ){
        if(parseInt(expir_date.slice(3,5)) === 24){
            if(expir_date.slice(0,2)> 9){
                return
            }
            
        }
        throw new Error("Invalid expiration date.")
    }
}
try{
    processPayment(50.25, "1234-5678-9012-3456", "12/25");
    processPayment(-10, "invalidCardNumber", "05/22");
    processPayment(50.25, "9876-5432-1098-7654", "01/20")
}catch(error){
    console.log(error.message)
}