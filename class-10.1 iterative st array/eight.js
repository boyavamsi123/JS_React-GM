let employees=[
    {"id":1,"ename":"Donni","gender":"Female"},
    {"id":2,"ename":"Clementina","gender":"Female"},
    {"id":3,"ename":"Carr","gender":"Male"},
    {"id":4,"ename":"Tabbi","gender":"Female"},
    {"id":5,"ename":"Benoit","gender":"Male"},
    {"id":6,"ename":"Robbi","gender":"Female"},
    {"id":7,"ename":"Michele","gender":"Agender"},
    {"id":8,"ename":"Julieta","gender":"Female"}
]
let i=0;
while(i<=employees.length-1){
    if(employees[i].gender==='Male'){
        console.log(employees[i].ename);
    }
    i++;
}