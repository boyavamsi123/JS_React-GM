console.log('Request-1');
console.log('Request-2');
console.log('Request-3');
console.log('Request-4');

/*
output:-
Request-1
Request-2
Request-3
Request-4*/

setTimeout(()=>{console.log('Request-1');},10000)
setTimeout(()=>{console.log('Request-2');},1000)
setTimeout(()=>{console.log('Request-3');},6000)
setTimeout(()=>{console.log('Request-4');},3000)

/*
output:-
Request-2
Request-4
Request-3
Request-1 
*/