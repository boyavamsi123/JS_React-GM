let numbers=[4,1,41,31,14,378,71,98,141]
let even_count=0;
let odd_count=0;

for(let num of numbers){
    if(num%2===0){
        even_count++;
    }
    else{
        odd_count++;
    }
}
console.log("No of Evens:"+even_count);
console.log("No of odds:"+odd_count);