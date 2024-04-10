//String functions
let str = "Hello, Coapps!";
console.log(str.length);
console.log(str.toUpperCase()); 
console.log(str.indexOf("Coapps")); 
console.log(str.split(", ")); 
console.log(str.replace("Coapps", "Team")); 

// Number functions
let num = 3.14159;
console.log(num.toFixed(2)); 
console.log(Number.isNaN(num)); 
console.log(Math.max(10, 20, 5)); 
console.log(Math.min(10, 20, 5)); 
console.log(Math.random()); 

// Array functions
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); 
console.log(arr.push(6)); 
console.log(arr.pop()); 
console.log(arr.unshift(0)); 
console.log(arr.shift()); 
console.log(arr.join("-")); 
console.log(arr.slice(1, 3)); 

// Date functions
let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth()); 
console.log(date.getDate()); 
console.log(date.getHours()); 
console.log(date.getMinutes()); 

// Function functions
function greet(name) {
  console.log("Hello, " + name + "!");
}
let greetFunction = greet;
greetFunction("Coapps"); 

// Global functions
setTimeout(function() {
  console.log("This message will be logged after 2 seconds.");
}, 2000);

console.log(isNaN("hello")); 
console.log(parseInt("10")); 
console.log(parseFloat("10.5")); 