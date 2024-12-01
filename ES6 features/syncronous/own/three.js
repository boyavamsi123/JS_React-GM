let calc=(a,b,operation)=>{
    if(operation==="sum"){
        return a+b;
    }
    if(operation==="multi"){
        return a*b;
    }
}
let r1=calc(10,30,"sum")
let r2=calc(10,30,"multi")
console.log(r1);  //40
console.log(r2);  //300
