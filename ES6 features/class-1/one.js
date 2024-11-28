/*var num=10; 
var pi=3.14;

console.log(typeof num);
console.log(typeof pi);*/

/*var num1 = 100;
var num2 = 10;

var total= num1+num2;
var diff = num1-num2;
var product = num1*num2;
var factor = num1/num2;
var totalUpto = (num1*(num1+1))/2;

console.log(total);
console.log(diff);
console.log(product);
console.log(factor);
console.log(totalUpto);

var equal = num1===num2;
var notEqual = num1 !== num2;
var greater = num1 > num2;
var lesser = num1 < num2; 
var greaterThanOrEqul = num1 >= num2;
var lessThanOrEqula = num1 <=   num2;

console.log(equal);
console.log(notEqual);
console.log(greater);
console.log(lesser);
console.log(greaterThanOrEqul);
console.log(lessThanOrEqula);

console.log(typeof equal);
console.log(typeof notEqual);
console.log(typeof greater);
console.log(typeof lesser);
console.log(typeof greaterThanOrEqul);
console.log(typeof lessThanOrEqula);*/

/*var num1 = 150;
var num2 = 149;
var choice;

//if statement - run code only when the condition is true
if(num1 > num2){
    choice = num1;
}

var largest;
//if-else statement
if(num > num2){
    largest = num1; //runs this code if the condition is true   
}
else{
    largest = num2; //runs this code if the condition is false
}

//using AND, OR and NOT using nested if-else-if
var n1 = 100;
var n2 = 50;
var guess = 77;
var result;

if(guess < n1 && guess > n2){
    result =`You guessed a number between ${n1} and ${n2}.`;
}
else 
if (guess === n1 || guess === n2) {
  result = 'You guessed one of the boundary number.';
} else
if (!(guess > n2)) {
  result = 'You guessed a very low number.'
}*/

// for loop
for (var i=1; i <= 10; i++) { // for (initialization; condition; updation)
    console.log(`5 x ${i} = ${5*i}`); // prints table of 5 like 5 x 1 = 5 to the console
  }
  
  // while loop
  var num = 1;
  var upto = 10;
  
  while (num <= upto) { // while (condition)
    console.log(`5 x ${i} = ${5*i}`); // prints table of 5 like 5 x 1 = 5 to the console - same as for but using while
    num = num + 1;
  }