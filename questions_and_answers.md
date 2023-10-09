1. Answer: A
Here JS treats greetign as a new variable because it is not declared with let, const or var. SO the greetign becomes a implicit global variable and it is initialized with an empty object. So the output will be option A: an empty object.

2. Answer: C
Here the sum function take two parameters a and b. When the function is called two arguments are given, one is a number and another is a string. In JS adding a number and string performs string concatenation instead of addition. So when a number is added with a string it just returns as a strings. If we add 4 + "5". The output will be 45. That's why here the output is a string and it

3. Answer: A
Here food is array and it is initialized with 4 fooditems. Then info is an object, the first element of food array is assigned to favouriteFood property of the info object. Then the favouriteFood property of the info object is reassigned to another value. In JS array and object are different data structures. They take different memory space. So reinitialize of the object's property does not affect the array. The array remains the same.

4. Answer: B
Here sayHi is a function which takes a paramenter name and returns a template string Hi there, ${name}. When the function is called, no arguments are passed. So the parameter inside the function wont get any value. So the parameter name will be undefined. That's why it will return Hi there, undefined.

5. Answer: C
Here count variable is assigned to 0 and an array names has 4 elements: 0,1,2,3. The foreach methord iterates the array and when the element of array is a truthy value the count variable is increased by 1. Inside the array 1st element 0 is a falsy value which don't increase the value of count variable. The other 3 elements of the array are truthy value so the condition becomes true and it increases the value of count variable and at last it becomes 3.