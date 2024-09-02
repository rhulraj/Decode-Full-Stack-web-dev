// ClosureAndDestructuring

//1 You are building a counter application that tracks the number of times a button is clicked. Implement the
//counter using closure.
//ans 
function parent(){
    let count = 0;

   return function counter(){   // A  closure is a function that has access to variables in its outer scope. 
        count += 1              // Closures are created when a function defined inside the another function,
        return `button is clicked ${count} times`
    }
}

const counter = parent();   // when a function is executed, a new execution context is created , closure allow the inner function to access the outer function variables and parameters .

console.log( counter())  // when the closure was created at the time the closure allow inner function to access the variables . 
//even if the variables have since been changed aor removed.

// 2. You have an object representing a customer order with properties orderId, productName, and quantity.
//Use destructuring to extract and print these properties.

let order = {
    orderId: "123456",
    productName: "Laptop",
    quantity: 2,
};

const {orderId, productName, quantity} =order; //destructuring in javascript is a suitable way to extract values from array and objects and assign them to the variable

console.log("orderId:", orderId);
console.log("productName:", productName);
console.log("quantity:", quantity);

//3. In this coding challenge let's try to implement the cart feature using javascript closure. Using JS closures
// try to create a cart array and return a function to getCartItems.

//4. Continuing the previous coding challenge, now let’s implement the add to cart feature. On calling add to
//cart closure function, the object of productId, name, quantity and price should be added to the cartItem.
//Note that if duplicate items with same prouductId is added, the product quantity must be incremented. Use
//javascript closures to achieve the output.

//5. Continuing the previous coding challenge, now let’s implement the remove item from cart feature. On
//calling the remove item closure function, the specified productId item must be removed from cartItems
//array.Use javascript closures to achieve the output.

function shoppingCart(){
    const cartItem  = []     // shoppingCart function returns cart object
    const cart ={
         getCartItems: ()=>{    //cart object contain getCartItems method to retrieve cart array 
            return cartItem;   
         },
         addItem : (product)=>{
           let isItemPresent = false
           cartItem.forEach((item)=>{
            if(item && item.id === product.id){ // if duplicate items with same productId is added , 
                isItemPresent = true
                item.quantity += 1  // product quantity must will increase
            }
           })
           if(!isItemPresent){
              cartItem.push({...product, quantity: 1})  // push product to cartItem array with using of spread operator to add new value quantity .
           }
         },
         removeItem: (id)=>{
              for(let i = 0 ; i < cartItem.length ; i++){
                 if(cartItem[i].id === id){
                    cartItem.splice(i, 1)
                 }
              } // remove item by the specified productid
            }
         }

    return cart
}
const cart = shoppingCart(); // Using js closures i assigned return value

console.log('Cart items:', cart.getCartItems());

const product1 = {id: 1, name: 'Product 1', price: 10};
const product2 = {id: 2, name: 'Product 2', price: 20};

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);

console.log('Cart items:', cart.getCartItems());

cart.removeItem(2);

console.log('Cart items:', cart.getCartItems());

// 6. You are developing a music playlist management system. Implement functions that leverage closures
//and higher-order functions to perform common playlist operations.
//Task 1: Create a function createPlaylist that takes a playlist name as a parameter and returns a closure. This
//closure should allow adding and listing songs for the given playlist.
//Task 2: Create a function addSong that takes a song name and artist as parameters and adds the song to the
//specified playlist. Use the closure created in TASK 1.
//Task 3: Create a function listSongs that lists all the songs in a specified playlist. Use the closure created in the task 1 

const allSong = {

}

function createPlaylist(Playlist){  // createPlaylist function is used for create playlist and return the playlist
     return Playlist
}

function addSong(playlist, songName, artist){  // addSong function is used for addSong to specified playlist it take playlist , songname and artistname as a argument
   let  isplaylist = allSong[playlist] ? true: false
    if(isplaylist === false){
     allSong[playlist] = [`${songName} by ${artist}`]
    }else{
        allSong[playlist] = [...allSong[playlist], `${songName} by ${artist}`]
    }
        
}
function listSongs(playlist){
      console.log(`${playlist} Playlist: ` , allSong[playlist])  // list songs function is used to list all song that is present in specified playlist
}

const myplaylist = createPlaylist('My Favourites');

addSong(myplaylist, "Song1", "Artist1");
addSong(myplaylist, "Song2", "Artist2");
addSong(myplaylist, "Song3", "Artist3");

listSongs(myplaylist);
