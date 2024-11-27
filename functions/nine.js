function cal_Age(name,dob){
    let current_year = new Date().getFullYear();
    return Name : ${name} - Age : ${current_year - dob}
}

let msg1  = cal_Age("Malavika M",1987)
let msg2 = cal_Age("Sam",1984)
let msg3 = cal_Age("Manju",1978)
console.log(msg1) 
console.log(msg2) 
console.log(msg3)