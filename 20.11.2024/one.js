let emp={
    eid:101,
    ename:"rahul"
}
let user={
    
}
console.log(Object.keys(emp));
console.log(Object.keys(emp).length);
console.log(Object.keys(emp).length>0);

if(Object.keys(emp).length>0){
    console.log("Not empty object");
}
else{
    console.log("empty object");
}