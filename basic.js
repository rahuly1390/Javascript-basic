//Primitive /ValueTypes
// By Default Value is undefined
//JS - Dynamic Language
//String
// let x = 'XBoss';
// console.log(x);
// console.log(typeof(x));
// //Number
// let y = 1;
// console.log(y);
// console.log(typeof(y));
// //Boolean
// let s = true;
// console.log(s);
// console.log(typeof(s));
// //undefined
// let w;
// console.log(w);

// // Null
// let z = null;
// console.log(z);
// console.log(typeof(z));


// Reference Types - Objects,Arrays, Functions

//Objects (Key value Pair)
let course = {
    title:'HLD',
    description:'Projects',
    rating:5
};
console.log(course);
console.log(typeof(course));
// console.log(course.title); Notation
// console.log(course['description']);

//CopyByValue only copies value
let d = 'Biswatma';
let h = d;
d = 'John';
console.log(d,h);

//Copied Refrence 

let p = {name:'Tutorial'};
let q = p;
p.name = 'Rahul';
console.log(p);
console.log(q);


//Arrays(Numeric Indices) and Functions are objects
let courses = ['hld','lld','dsa',6,null,true];
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);

// function
function createCourse(courseName){
    console.log('creating ' + courseName);
}

//Call Function
createCourse('Angular');

// How JS get Executed - So it's Created Execution Context or GEC(Global Execution Context) for each and every functions is called get adds to stack.
// 2 Main Components or Phase (Before/After)
// Before Phase where Memory is allocated for Variables - Memory Phase - Variable Environment

// Synchronus Single Threaded Language
// 2nd Phase is called Code pHase where executed line by line code. - Thread of Execution

//Hoisting
// var a = 10;
// console.log(a);
// console.log(this.a);
// console.log(window.a);
// console.log(window);
// console.log(this === window);
// const.let - more strict then var
// const/let - Block Scope
// var - Function Scope
// Temporal Dead Zone
let a = 10;
const b = 20; // value unavailable at Memory Phase
var c = 23; // value undefined but memory allocated globally
{
    let h = 10;
    const j = 20;
    var g = 30;
    console.log(h,j); // block scope
}
console.log(g); // Access outside the scope
// console.log(a);
// var a = 10;

// Lexical Scope
function hello(){
    let x =10; // local scope
    console.log(x);
}
let x = 100; // Outer Scope/Global
hello();


// Deep Dive in Functions(First Class Citizens)
// Passed as Argument/Stored in Data Structure

function add(a,b){
    return a +b;
}

console.log(add);
console.log(add(2,3));

let sum = function add(a,b){
    return a +b;
}
let diff = function add(a,b){
    return a - b;
}
let divide = (a,b) => a / b; // Arrow Function
console.log(sum);
console.log(sum(2,3));

// Higher Order Function
// function can be passed as Argument
function operate(operationFunc,a,b){
    return operationFunc(a,b);
}
console.log(operate(sum,2,3));
console.log(operate(diff,8,6));

// We want one function to return from another function
// Outer Function
// Function + Lexical Scope(Reference to all the variable)  = Closure
let n = 10;
function outer(){
    n = 100;
    function inner(){
        console.log('Hello Inner Function',n);
    }
    return inner;
}

let returnedFuncVar = outer();

n = 20;
console.log(returnedFuncVar);
returnedFuncVar();

// Closure
function outer(){
   let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}

let incrementCounter = outer();
console.log(incrementCounter());
incrementCounter();
incrementCounter();

//Advanced JS
// Callbacks - To Handle Async Operations
// event loop / event queue
function fetchData(callback){
    setTimeout(() =>{
       let data='fetched data';
        callback(data,null); 
        // callback(data,'server error'); Error State
    },5000);
}

function handleData(data,error){
    if(error){
        console.error(error);
    } else{
        console.log(data);
    }

}
fetchData(handleData);

// Problems of Callbacks - Callback Hell / Pyramid of DOOM
//  asycnOperation1(arg1, (result1) =>{
//     asycnOperation2(result1,(result2)=>{
//         asycnOperation3(result2,(result3)=>{
//             // More nested loop
//             asycnOperation4(result3,(result4)=>{
//             // And so on
//             });
//         });
//     });
//  });

 // Promises - Object
 // 3 States - pending, fullfilled, rejected

 function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Data Fetched');
            // reject('Data Failed');
        },2000);
    });
 }

 getData()
    .then(result =>{
        console.log(result);
    })
    .catch(error =>{
        console.log(error);
    })

    // Async /Await Function
    async function XData() {
        try{
            const result = await getData();
            console.log(result);
        }
        catch(error){
            console.error(error);
        }
        
    }

    // Common Higher Order Function
    // 1. Map
    // 2. Filter
    // 3. Reduce
    const nums = [1,2,3,4,5];
    console.log(nums);
    const doubleNums = nums.map((num) => num*2);
    console.log(doubleNums);
    const evens = nums.filter((num) => num%2 === 0);
    console.log(evens);
    // Fibannoci Series
    const product = nums.reduce((acculmator,num) => acculmator * num,1);
    console.log(product);

    //Loops
   function myLoop(){
    for(let i=0;i<10;i++){
        if( i ==5){
            return;
        }
        console.log();
    }
   }
   myLoop()

   //forEach
   let array=["Aman","Rahul","Happy"];
   array.forEach((element)=>{
    console.log(element);
   })

//DOM
//console.log(window.document);
//console.dir(document);
//console.log(document.baseURI);
//console.log(document.links);

Math.round(53.90) // Converts Float to Integer

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const coursesR = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// coursesR.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

let xboss = 1;
if(function f() {}){
    x += typeof f;
}

console.log(xboss)


