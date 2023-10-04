RAHUL KUMAR SINGH
Wave-2 Batch-1

**Regular Function:**

1. What is a regular function in JavaScript?
* A regular function in JavaScript is a block of code for executing a specific task or a given set of instructions when called.

2. How do you define a regular function in JavaScript?
* We can define a regular function by using the 'function' keyword, followed by a function name, parentheses for parameters, and curly braces for the function body. For example:
function add(a, b) {
    return a + b
}

3. What is the difference between a function declaration and a function expression?
* The main difference between a function declaration and a function expression is how they are handled. Function declarations are called entirely, meaning you can call them before declaring them, while function expressions are not called this way they are a part of the function body.

4. Can you call a regular function before declaring it in your code?
* Yes, we can call a regular function before declaring it if we are using function declaration. However, if you use function expression, we cannot call it before the point where it's defined in our code.

5. How do you return a value from a regular function in JavaScript?
To return a value from a regular function, we can use the return statement followed by the value we want to return. For example:
function addition(a, b) {
    return a + b;
}

**Arrow Function:**

6. What is an arrow function in JavaScript?
* An arrow function in JavaScript is a concise and minimal way to write functions using the "=>" syntax.

7. How do you define an arrow function?
* We can define an arrow function by removing the function keyword and using the "=>" symbol between the parameters and the function body. For example:
const add = (a, b) => {
    return a + b;
}

8. What are the key differences between arrow functions and regular functions?
* Main differences between arrow functions and regular functions include a more concise syntax for the arrow function and a more efficient debugging experience. Arrow functions do not have their own function body but they inherit it from the code inside the parenthesis.

9. Do arrow functions have their own "this" context?
* No, arrow functions do not have their own this context; they use the this value from the surrounding parenthesis code.

10. Can arrow functions be used as methods in objects?
* Yes, arrow functions can be used as methods in objects, but they are not suitable for methods that require access to the object itself because they don't have their own this.

**Anonymous Function:**

11. What is an anonymous function in JavaScript?
* An anonymous function is a function without a name. It can be defined and used without being assigned to a variable.

12. How do you define an anonymous function?
* We can define an anonymous function by omitting the function name. For example:
const result = function(a, b) {
    return a + b;
}

13. Can you name an anonymous function later in your code?
* We can't name an anonymous function later in our code however, we can assign it to a variable to give it a name as shown in the previous example.

14. What is the main use case for anonymous functions in JavaScript?
* The main use case for anonymous functions is when we need a function as an argument to another function, like in callback functions.

15. What is the advantage of using named functions over anonymous functions?
* Named functions have advantages in terms of function calling and better documentation, making our code more readable and maintainable.

**Function Expression:**

16. What is a function expression in JavaScript?
* A function expression is the way to define a function and assign it to a variable. It is different from a function declaration.

17. How is a function expression different from a function declaration?
* The main difference between a function declaration and a function expression is how they are handled. Function declarations are called entirely, meaning you can call them before declaring them, while function expressions are not called this way they are a part of the function body.

18. Can you invoke a function expression before defining it in your code?
* We can invoke a function expression only after it has been defined in our code, so as long as we do so after the definition it will work.

19. What are some common use cases for function expressions?
* 
Some Common use cases for function expressions include defining functions as arguments to other functions (callback functions) and creating functions conditionally based on program logic.

20. What is a named function expression, and when would you use it?
* A named function expression is a function expression with a function name assigned to it, which can be useful for referencing and debugging.

**Generator Function:**

21. What is a generator function in JavaScript?
* A generator function in JavaScript is a special function that can be paused and resumed during its execution. It allows us to generate a sequence of values, one at a time, which is helpful when dealing with very large datasets or even asynchronous operations.

22. How do you define a generator function?
* We can define a generator function using the "function*" syntax, where * classifies it as a generator function. Inside a generator function, we use the yield keyword to return values one at a time. Example:

function* numberGenerator() {
    yield 10;
    yield 20;
    yield 30;
}

23. What is the purpose of the "yield" keyword in a generator function?
* The purpose of the yield keyword in a generator function is to pause the function's execution and return a value. It allows us to return a value and then resume the function from where it left off when the generator is iterated.

24. How do you iterate over the values generated by a generator function?
* We can iterate over the values generated by a generator function using a for...of loop, or by manually calling the .next() method on the generator object.
Example using a for...of loop:

const gen = numberGenerator();
for (const num of gen) {
    console.log(num);
}

25. What are some advantages of using generator functions?
* Advantages of using generator functions include:
Memory efficiency: Generator functions allow you to generate values at a time, which is useful for processing large datasets without loading everything into memory at once.
Simplified asynchronous code: Generators can simplify asynchronous code by providing a sequential and readable way to work with asynchronous operations, making it easier to avoid callback hell or complex promise chains.

**Callback Function:**

26. What is a callback function in JavaScript?
* A callback function in JavaScript is a function that is passed as an argument to another function and is intended to be executed after the completion of that function. Callbacks are mostly used for handling asynchronous operations.

27. Why are callback functions commonly used in asynchronous programming?
* Callback functions are commonly used in asynchronous programming because JavaScript is single-threaded and non-blocking. They allow us to specify what should happen when an asynchronous task completes, ensuring that other tasks can continue executing in the meantime.

28. Can you pass a function as an argument to another function in JavaScript?
* Yes, we can pass a function as an argument to another function in JavaScript. This is a fundamental concept in JavaScript and often used for callbacks.

29. Give an example of a callback function being used in an asynchronous operation, like a setTimeout.
* Here's an example of a callback function being used with setTimeout to simulate an asynchronous operation:

function delayedGreeting(name, callback) {
    setTimeout(function() {
        callback("Hiii, " + name);
    }, 1000);
}

delayedGreeting("Naman", function(message) {
    console.log(message);
});

30. How do you handle errors in callback functions?
* Handling errors in callback functions typically involves checking for error conditions within the callback function and taking appropriate action, such as calling another callback to handle the error or logging the error message.

**Recursive Function:**

31. What is a recursive function in JavaScript?
* A recursive function in JavaScript is a function that calls itself, either directly or indirectly, to solve a problem. It iss a technique for solving problems that can be broken down into smaller, similar sub-problems.

32. How does a recursive function differ from an iterative one?
* Recursive functions differ from iterative ones in that they use function calls to repeat a set of instructions. In contrast, iterative functions use loops to repeat a set of instructions.

33. Provide an example of a recursive function and explain its purpose.
* Here's an example of a recursive function that calculates the factorial of a number:

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1)
}

34. What is the base case in a recursive function, and why is it important?
* The base case in a recursive function is a condition that determines when the recursion should stop. It prevents infinite recursion and defines the simplest, non-recursive case of the problem.

35. What are the potential drawbacks of using recursive functions in JavaScript?
* Potential drawbacks of using recursive functions in JavaScript include:

Stack overflow: Recursive functions can lead to a stack overflow if not properly optimized or if the recursion depth is too deep.
Performance: Recursive calls can be less efficient than iterative solutions for certain problems.
Code readability: Recursive code can be more challenging to understand and debug for some people.