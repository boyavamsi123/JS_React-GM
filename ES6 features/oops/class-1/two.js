let numbers=[41,2,31,18,7,74,378]
//collect all even num into new array
let even = [];
let i = 0;
while(i < numbers.length) {
       if (numbers[i] % 2 == 0)
       even.push(numbers[i]);
       i++;
}

// Printing output
console.log(`Even numbers in an array are: ${even}`) 