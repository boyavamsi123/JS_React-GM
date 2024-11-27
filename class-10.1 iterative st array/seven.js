let employees=[
    {"id":1,"ename":"Otha","gender":"Agender"},
    {"id":2,"ename":"Ailis","gender":"Female"},
    {"id":3,"ename":"Orsa","gender":"Female"},
    {"id":4,"ename":"Christean","gender":"Female"},
    {"id":5,"ename":"Darrell","gender":"Male"}
]
for(let emp of employees){
    if(emp.gender ==="Female"){
        console.log(emp);
    }
}       