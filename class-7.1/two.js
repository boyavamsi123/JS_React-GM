let emp={
    eid:101,
    enames:"rahul",
    esal:45000.45
}
//read
console.log(emp);
//how to read object values
console.log(emp.eid);
console.log(emp.ename);
console.log(emp.esal);
console.log(emp.email);
//update
emp.ename="rahul gandhi"
emp.email='rg@pm.com'
console.log(emp);
//delete
delete emp.sal
console.log(emp);