let employees=[
    {"id":1,"ename":"Floria","gender":"Female"},
    {"id":2,"ename":"Renard","gender":"Male"},
    {"id":3,"ename":"Meredeth","gender":"Male"},
    {"id":4,"ename":"Alberik","gender":"Male"},
    {"id":5,"ename":"Wyn","gender":"Male"},
    {"id":6,"ename":"Bartram","gender":"Male"},
    {"id":7,"ename":"Bernetta","gender":"Female"},
    {"id":8,"ename":"Dame","gender":"Genderqueer"},
    {"id":9,"ename":"Jeno","gender":"Male"},
    {"id":10,"ename":"Garrett","gender":"Male"},
    {"id":11,"ename":"Lynde","gender":"Female"},
    {"id":12,"ename":"Lenna","gender":"Female"},
    {"id":13,"ename":"Carlota","gender":"Female"},
    {"id":14,"ename":"Julee","gender":"Female"},
    {"id":15,"ename":"Evelyn","gender":"Male"},
    {"id":16,"ename":"Clemence","gender":"Female"},
    {"id":17,"ename":"Curtis","gender":"Male"},
    {"id":18,"ename":"Benedetto","gender":"Male"},
    {"id":19,"ename":"Bethanne","gender":"Female"},
    {"id":20,"ename":"Victor","gender":"Male"},
    {"id":21,"ename":"Rosemary","gender":"Female"},
    {"id":22,"ename":"Ansell","gender":"Male"},
    {"id":23,"ename":"Melitta","gender":"Female"},
    {"id":24,"ename":"Susy","gender":"Female"},
    {"id":25,"ename":"Nolan","gender":"Male"},
    {"id":26,"ename":"Margi","gender":"Female"},
    {"id":27,"ename":"Gustavo","gender":"Male"},
    {"id":28,"ename":"Jereme","gender":"Male"},
    {"id":29,"ename":"Bryn","gender":"Female"},
    {"id":30,"ename":"Rubie","gender":"Female"},
    {"id":31,"ename":"Rochella","gender":"Female"},
    {"id":32,"ename":"Demeter","gender":"Female"},
    {"id":33,"ename":"Dorothea","gender":"Female"},
    {"id":34,"ename":"Virgie","gender":"Male"},
    {"id":35,"ename":"Morgun","gender":"Male"},
    {"id":36,"ename":"Claudia","gender":"Non-binary"},
    {"id":37,"ename":"Merline","gender":"Female"},
    {"id":38,"ename":"Bryon","gender":"Male"},
    {"id":39,"ename":"Oby","gender":"Male"},
    {"id":40,"ename":"Tatiania","gender":"Female"},
    {"id":41,"ename":"Janean","gender":"Female"},
    {"id":42,"ename":"Nadine","gender":"Bigender"},
    {"id":43,"ename":"Betty","gender":"Female"},
    {"id":44,"ename":"Shelia","gender":"Female"},
    {"id":45,"ename":"Charlot","gender":"Female"},
    {"id":46,"ename":"Dane","gender":"Male"},
    {"id":47,"ename":"Jammal","gender":"Male"},
    {"id":48,"ename":"Miner","gender":"Male"},
    {"id":49,"ename":"Daile","gender":"Female"},
    {"id":50,"ename":"Valry","gender":"Non-binary"}
]
let Male_count=0;
let Female_count=0;
for(let emp of employees){
    if(emp.gender==='Male'){
        Male_count++;
    }
    if(emp.gender==='Female'){
        Female_count++;
    }
}
console.log("No of Male eployees:"+Male_count);
console.log("No of Female:"+Female_count);