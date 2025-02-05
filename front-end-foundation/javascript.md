# JavaScript

## **Syntax**

### **Statement**

A **statement** is a single line of code that performs an action, such as declaring a variable, calling a function, or assigning a value.

```javascript
let x = 10; // variable declaration and assignment
```

### **Line vs Statement**

A **line** is just a visual break in your code (a single row). A **statement** is a line of executable code. A line may contain multiple statements, and a statement may span multiple lines for readability, but each statement must be logically completed on its own.

```javascript
let x = 10;
x += 5; // both are statements, each on a line
```

### **Expression**

An **expression** is any combination of literals, variables, operators, and function calls that can be evaluated to produce a value.

```javascript
let sum = 2 + 3; // '2 + 3' is an expression that evaluates to 5
```

#### **Expression Example:**

```javascript
let result = 5 * 3 + 8; // (5 * 3) + 8 is an expression, evaluating to 23
```

### **Semicolon**

In JavaScript, **semicolon** is used to terminate statements. It's not strictly required after every statement because JavaScript uses **automatic semicolon insertion (ASI)**. However, to avoid ambiguous situations, it’s generally recommended to include them.

```javascript
let a = 10; // semicolon is used after the statement
```

---

## **Data Types**

### **String**

A **string** represents a sequence of characters enclosed within quotes (either single or double).

```javascript
let name = "Alice";
```

### **Number**

A **number** can be an integer or a floating-point value.

```javascript
let age = 25; // integer
let price = 19.99; // floating-point number
```

### **Boolean**

A **boolean** represents a truth value, which can either be true or false.

```javascript
let isAdult = true;
```

### **Undefined**

The **undefined** type indicates that a variable has been declared but not yet assigned a value.

```javascript
let myVar;
console.log(myVar); // undefined
```

### **Null**

The **null** type represents the intentional assignment of an "empty" or "blank" value.

```javascript
let myVar = null;
console.log(myVar); // null
```

### **Null vs Undefined**

- `null` is intentionally empty, whereas `undefined` indicates the absence of a value.

```javascript
let x = null; // Explicitly set as empty
let y; // Undefined by default
```

### **typeof Operator**

The `typeof` operator returns the data type of a variable or an expression.

```javascript
let x = 10;
console.log(typeof x); // "number"
```

---

## **Variables**

### **var**

The **var** keyword is the traditional way of declaring a variable in JavaScript. It is function-scoped and hoisted to the top of its scope.

```javascript
var age = 25;
```

### **let**

The **let** keyword was introduced in ES6 (ECMAScript 2015). It is block-scoped and does not have hoisting issues like `var`.

```javascript
let age = 30;
```

### **const**

The **const** keyword is used for variables that cannot be reassigned. It must be initialized with a value when declared.

```javascript
const name = "John";
```

### **Identifier = Variable Name**

An **identifier** is the name you give to a variable. A variable **name** is the identifier you use to access its value.

```javascript
let firstName = "John"; // 'firstName' is the identifier
```

### **Define & Assign**

- **Define**: Declaring the variable.
- **Assign**: Giving a value to the variable.

```javascript
let x; // define
x = 10; // assign
```

### **Define and Assign**

You can define and assign a variable in a single statement.

```javascript
let x = 5;
```

---

## **if Statements**

### **Comparison Operators**

Comparison operators are used to compare values.

- `==` (equal to)
- `===` (strict equal to - checks both value and type)
- `!==` (not equal to)
- `!=` (loose inequality)
- `>` (greater than)
- `<` (less than)
- `>=` (greater than or equal to)
- `<=` (less than or equal to)

```javascript
let a = 10;
let b = 20;
console.log(a == b); // false
console.log(a < b); // true
```

### **if**

An `if` statement is used to execute code conditionally.

```javascript
if (x > 10) {
  console.log("x is greater than 10");
}
```

### **if else**

An `if else` statement provides an alternative code path.

```javascript
if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is not greater than 10");
}
```

### **if else if**

Multiple conditions can be checked with `if else if`.

```javascript
if (x > 10) {
  console.log("x is greater than 10");
} else if (x === 10) {
  console.log("x is equal to 10");
} else {
  console.log("x is less than 10");
}
```

---

## **Functions**

### **Function Declaration**

A function declaration defines a named function that can be invoked later.

```javascript
function greet() {
  console.log("Hello!");
}
greet(); // Output: Hello!
```

### **Parameters**

Parameters are inputs to a function that can be used in its implementation.

```javascript
function greet(name) {
  console.log("Hello, " + name);
}
greet("Alice"); // Output: Hello, Alice
```

### **Return**

A function can **return** a value to its caller.

```javascript
function add(a, b) {
  return a + b;
}
let result = add(3, 5);
console.log(result); // Output: 8
```

### **Calling**

A function is called by using its name followed by parentheses, potentially with arguments passed in.

```javascript
function greet(name) {
  console.log("Hello, " + name);
}
greet("Bob"); // Output: Hello, Bob
```

### **Function Expression**

A **function expression** is a function defined in the middle of an expression.

```javascript
const greet = function (name) {
  console.log("Hello, " + name);
};
greet("Charlie"); // Output: Hello, Charlie
```

### **Anonymous Function**

An **anonymous function** is a function without a name. It’s often used in function expressions.

```javascript
const greet = function (name) {
  console.log("Hello, " + name);
};
```

### **Arrow Function**

An **arrow function** provides a shorter syntax and implicitly binds `this`.

```javascript
const greet = (name) => console.log("Hello, " + name);
greet("Eve"); // Output: Hello, Eve
```

- If there's no parameter or multiple parameters, parentheses are required.

  ```javascript
  const greet = () => console.log("Hello!");
  const sum = (a, b) => a + b;
  ```

- If the function is one line, braces `{}` and the `return` keyword are optional.

  ```javascript
  const add = (a, b) => a + b;
  ```

---

Thank you! Here's the expanded section that shows the process of converting a regular function to an arrow function using the steps you specified:

---

### **Converting a Regular Function to an Arrow Function**

Let’s break down the transformation of a regular function into an arrow function step by step.

#### **1. Regular Function**

A regular function is declared with the `function` keyword. It can be named or anonymous, and you can pass parameters inside the parentheses.

Example of a regular function with parameters:

```javascript
function add(a, b) {
  return a + b;
}
```

#### **2. Arrow Function**

##### Step-by-Step Conversion:

- **Make anonymous**: Remove the function name, so it becomes an anonymous function (usually assigned to a variable).
- **Replace function keyword with `=>`**: The `function` keyword is replaced by an arrow (`=>`).
- **Parameters**: If there are no parameters or more than one, parentheses `()` are required. If there is exactly one parameter, you can omit the parentheses.
- **One-line implementation**: If the function has a simple implementation (like a single return statement), the curly braces `{}` can be omitted, and the `return` keyword is implicit.

Let’s apply these transformations:

#### **3. Convert the Function to Arrow Function**

Start with the regular function:

```javascript
function add(a, b) {
  return a + b;
}
```

Step-by-step transformation:

1. **Remove the function name** (makes it anonymous, if needed).
2. **Replace the `function` keyword with `=>`**.
3. **Use parentheses for parameters** (in this case, two parameters, so they stay in parentheses).
4. **Eliminate curly braces and the `return` keyword** because it's a one-line function.

Final arrow function:

```javascript
const add = (a, b) => a + b;
```

#### **Handling No Parameters**

If the function had no parameters, you would still need to add empty parentheses.

Example of a regular function without parameters:

```javascript
function greet() {
  console.log("Hello!");
}
```

Converted arrow function:

```javascript
const greet = () => console.log("Hello!");
```

#### **Handling Multiple Parameters**

If the function has multiple parameters, use parentheses around them, even in the arrow function.

Example with multiple parameters:

```javascript
function multiply(x, y) {
  return x * y;
}
```

Converted arrow function:

```javascript
const multiply = (x, y) => x * y;
```

#### **Arrow Function with No Block**

If the function’s implementation is a single expression, there is no need to use curly braces `{}` or the `return` keyword because the return is implicit.

Example:

```javascript
function square(n) {
  return n * n;
}
```

Converted arrow function:

```javascript
const square = (n) => n * n;
```

---

Thanks for your patience! Here's the content for the remaining topics:

---

## **Variable Scope**

### **Block Scope**

Variables declared with `let` and `const` are block-scoped, which means they are only accessible within the block of code where they are defined.

```javascript
if (true) {
  let blockScoped = "I'm inside a block";
  console.log(blockScoped); // Works here
}
console.log(blockScoped); // Error: blockScoped is not defined
```

### **Function Scope**

Variables declared inside a function using `var` are scoped to the function. They are not accessible from outside the function.

```javascript
function testScope() {
  var functionScoped = "I'm inside a function";
  console.log(functionScoped); // Works here
}
console.log(functionScoped); // Error: functionScoped is not defined
```

### **Global Scope**

Variables declared outside of functions or blocks are globally scoped and can be accessed anywhere in your program.

```javascript
var globalVar = "I'm global";
function testGlobal() {
  console.log(globalVar); // Works here
}
testGlobal();
console.log(globalVar); // Works here too
```

---

## **Objects**

### **Object Literal**

An object literal is a comma-separated set of key-value pairs inside curly braces `{}`.

```javascript
const person = {
  name: "John",
  age: 30,
};
```

### **Properties**

An object can have properties, which are key-value pairs. In the example above, `name` is a property with the value `"John"`, and `age` is another property with the value `30`.

```javascript
const person = {
  name: "John",
  age: 30,
};
```

> **Note**: Property names are sometimes referred to as "keys".

### **Accessing Properties**

You can access the properties of an object using either **dot notation** or **bracket notation**.

#### **Dot Notation:**

```javascript
console.log(person.name); // John
console.log(person.age); // 30
```

#### **Bracket Notation:**

Bracket notation is useful when property names are dynamic or include special characters.

```javascript
console.log(person["name"]); // John
console.log(person["age"]); // 30
```

### **Common Standard Built-in Objects**

JavaScript has several built-in objects, including `Date`, `Number`, and `String`.

#### **Date:**

The `Date` object represents date and time.

```javascript
const currentDate = new Date();
console.log(currentDate);
```

#### **Number:**

The `Number` object allows you to work with numeric values.

```javascript
const num = new Number(42);
console.log(num);
```

#### **String:**

The `String` object allows you to manipulate text values.

```javascript
const str = new String("Hello World!");
console.log(str);
```

---

## **String**

### **Methods**

Strings have several built-in methods that allow you to manipulate text. Some commonly used ones are:

- `.toUpperCase()`
- `.toLowerCase()`
- `.slice()`
- `.replace()`
- `.trim()`

Example:

```javascript
let message = " Hello ";
console.log(message.trim()); // "Hello"
```

### **Variable Replacement within Template Literals**

Template literals (backticks) allow for easy variable insertion inside strings.

```javascript
const name = "John";
const message = `Hello, ${name}!`;
console.log(message); // "Hello, John!"
```

### **Searching in a String**

JavaScript provides methods for searching for substrings within a string. Some useful methods include:

- `.includes()`
- `.indexOf()`
- `.search()`

Example:

```javascript
let text = "Hello, World!";
console.log(text.includes("World")); // true
```

---

## **Date**

### **`new`**

The `new` keyword is used to create a new instance of a `Date` object.

```javascript
const currentDate = new Date();
console.log(currentDate); // Shows current date and time
```

### **`parse`**

`Date.parse()` allows you to parse a string and convert it into a timestamp.

```javascript
const timestamp = Date.parse("2023-03-01");
console.log(timestamp); // Returns the timestamp of the date string
```

---

## **Arrays**

### **Collection or List**

Arrays are collections that can store multiple values of different types in a single variable.

### **Creating `[]`**

Arrays are created using square brackets `[]`.

```javascript
let colors = ["red", "blue", "green"];
```

### **Storing Primitives**

Arrays can store primitives like strings, numbers, and booleans.

```javascript
let numbers = [1, 2, 3, 4];
```

### **Storing Objects**

Arrays can also store objects.

```javascript
let cars = [
  { make: "Toyota", model: "Corolla" },
  { make: "Honda", model: "Civic" },
];
```

### **Array Methods**

Arrays have built-in methods for manipulating and transforming the array data.

#### **forEach:**

Executes a provided function once for each array element.

```javascript
colors.forEach((color) => console.log(color));
```

#### **find:**

Returns the first element in the array that satisfies the provided function.

```javascript
let found = colors.find((color) => color === "blue");
console.log(found); // "blue"
```

#### **filter:**

Creates a new array with all elements that pass the test.

```javascript
let filtered = numbers.filter((num) => num > 2);
console.log(filtered); // [3, 4]
```

#### **map:**

Creates a new array populated with the results of calling a provided function on every element.

```javascript
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

#### **reduce:**

Apply a function to each element of the array (from left to right) to reduce it to a single value.

```javascript
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

---

## **For Loops**

### **for**

The `for` loop repeats a block of code a specified number of times.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### **for of**

The `for...of` loop iterates over values in iterable objects like arrays.

```javascript
let numbers = [1, 2, 3];
for (let number of numbers) {
  console.log(number);
}
```

### **for in**

The `for...in` loop iterates over object properties.

```javascript
let person = { name: "John", age: 30 };
for (let prop in person) {
  console.log(prop + ": " + person[prop]);
}
```

---

## **Classes**

### **Define Class**

A class is defined using the `class` keyword.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

### **Constructor**

The constructor is a special function that runs when a class instance is created.

```javascript
constructor(name, age) {
  this.name = name;
  this.age = age;
}
```

### **Properties**

Classes can have properties that describe the state of an object created from that class.

```javascript
this.name = name;
this.age = age;
```

### **Methods**

Methods are functions defined inside the class that operate on the class properties.

```javascript
greet() {
  console.log(`Hello, my name is ${this.name}`);
}
```

### **Create Class Using `new`**

You create an instance of the class using `new`.

```javascript
const person1 = new Person("Alice", 25);
person1.greet(); // "Hello, my name is Alice"
```

### **Extending**

You can extend a class to create a subclass.

```javascript
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age); // Call the parent constructor
    this.position = position;
  }
}
```

---

## **Promises**

### **Asynchronous vs Synchronous Code**

- **Synchronous**: The code executes one statement at a time, blocking further code execution until the current one completes.
- **Asynchronous**: The code can execute non-blocking, allowing the program to proceed while waiting for other code to finish.

### **then method**

Promises have a `.then()` method to handle successful completions, and `.catch()` for errors.

```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;
  success ? resolve("Success!") : reject("Failure!");
});

promise
  .then((result) => console.log(result)) // Success!
  .catch((error) => console.log(error));
```

- **Handle Errors with `catch`:**
  You can add a `.catch()` to catch errors.

```javascript
promise.catch((error) => console.log(error)); // "Failure!" if rejected
```

- **Keep Promise Chain Going:**
  You can return another promise from within the `.then()` method to chain further promise operations.

```javascript
promise
  .then((result) => {
    return new Promise((resolve, reject) => {
      resolve("Another success!");
    });
  })
  .then((result) => console.log(result)); // "Another success!"
```

### **async/await**

Async/await allows working with promises in a more synchronous style.

```javascript
async function fetchData() {
  try {
    let data = await fetch("https://api.example.com");
    let json = await data.json();
    console.log(json);
  } catch (error) {
    console.log("Error:", error);
  }
}
```

---

These additional topics should now be complete. Let me know if any adjustments or more details are needed!
