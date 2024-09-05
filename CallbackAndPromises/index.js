//CallbackAndPromises

// Assignment 1
//Write a function sumAsync that takes two numbers as arguments and uses a callback to return their sum after
//a delay of 1 second.

async function sumAsync(num1, num2){  // async keyword show that this function perform asynchronous operation 
    console.log('start')
    let sum = new Promise((resolve, reject)=>  // here promise constructor is used to handle asynchronous operation
    setTimeout(()=>{
        resolve(num1+num2)  
    },1000));
    let result = await sum; // await keyword used to wait for the completion of an asynchronous operation
    console.log(result)
    console.log('end')
}
sumAsync(4,5)


//Assignment 2
//Create a function getData that returns a Promise. The Promise should resolve after 2 seconds with a message
//"Data fetched successfully."

//ans
async function getData(){
    let data = new Promise((resolve,reject)=>setTimeout(()=> resolve('Data fetched successfully'),2000))
    let result = await data
    console.log(result);
}
getData()

//Assignment 3
//Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL and returns
//the parsed JSON response.

//Assignment 4
//Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL () and returns the parsed JSON response.
//ans 
async function fetchData(){
    try{
    const respose = await fetch('https://jsonplaceholder.typicode.com/todos/1')   //fetch() is used to make request to the API, and response is saved to the response variable useing await keyword.
    const data = await respose.json()  // then the response is parsed as JSON using response.json() method and saved to data variable.
    console.log(data)  // log the data
    }catch(error){
    console.log(error)
    }
}

fetchData()

//Assignment 5
//Implement a function multiplyWithCallback that takes an array of numbers and a callback function. The
//function should multiply each element of the array by 2 and pass the result to the callback.

function multiplyWithCallback(arr,callback){
       let updatedArray = arr.map((element)=> element * 2);
       callback(updatedArray)   
}

let array = [1, 2, 4, 5, 6, 7, 8, 9];

function callback(arr){
    console.log(arr);
}

multiplyWithCallback(array,callback);



//Assignment 6
//Create a function fetchUserDataAndPosts that takes a user ID and fetches the user details and their posts
//using separate API calls. Use promise chaining to ensure the posts are retrieved only after the user details are
//fetched. Return an object with user details and posts.

async function fetchUserDataAndPosts(userId){
      const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      const userData = await user.json()

      const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const postsData = await posts.json()
       
      const data = {
        user: userData,
        posts: postsData
      }
      
      console.log(data);
    //   console.log(data.user)
}

fetchUserDataAndPosts(2)

//Assignment 7
//Write a function fetchMultipleData that takes an array of URLs and uses Promise.all() to fetch data from all the
//URLs concurrently. Return an array of responses.

function fetchMultipleData(arr){
    const promise = arr.map((url)=> fetch(url));
     Promise.all(promise).then(result=>{
        console.log("responses: ", result)
    }).catch(error=>{
        console.log(error)
    })
};
const url= [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4'
]
fetchMultipleData(url)

//Assignment 8
//Create a function racePromises that takes an array of promises and returns the result of the first promise that
//resolves or rejects. Use Promise.race() to implement this.

function racePromises(promises){
    Promise.race(promises).then((value)=> { // The Promise.race() method used tp  returns a promise that fulfils or rejects as soon as
        console.log(value)                    //  from one of the promise in a iterable promises.

    }).catch((error)=>{
        console.log(error)
    })
}
function promise(time, value ){
      let promise = new Promise((resolve, reject)=>{ 
        setTimeout(()=>{
            resolve(value)
        }, time)
      })
      return promise;
}
const promises = [
    promise(1000,'first'),
    promise(2000, 'second'),
    promise(3000, '3rd'),
    promise(3000, '4th'),
    promise(1000, '5th')
]
racePromises(promises);  