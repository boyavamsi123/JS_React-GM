let emp={
    eid:101,
    ename:"Rahul"
}
let user={}
console.log(Object.keys(emp))//[ 'eid', 'ename' ]
console.log(Object.keys(user))//[]
console.log(Object.keys(emp).length)//2
console.log(Object.keys(user).length)//0
console.log(Object.keys(user).length>0)//false
console.log(Object.keys(emp).length>0)//true