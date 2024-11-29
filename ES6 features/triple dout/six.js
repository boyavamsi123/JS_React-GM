let emp={
    eid:101,
    ename:"rahul",
    esal:45000,
    email:"rg@pm.com"
}
let details={
    email:"rg@gmail.com",
    loc:"new delhi"
}
let emp_details={...emp,...details}
console.log(emp_details);