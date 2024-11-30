let employees=[
    {eid:101,ename:"rahul",esal:45000},
    {eid:102,ename:"sonia",esal:55000}
]
let createEmployee=(emp)=>{
    setTimeout(()=>{
        employees.push(emp)
    },4000)
}
let getEmployee=()=>{
    setTimeout(()=>{
        let row="";
        employees.forEach((emp)=>{
            rows = rows+ 
                        `<tr>
                           <td>${emp.eid}</td>
                           <td>${emp.ename}</td>
                           <td>${emp.esal}></td>
                        </tr>`
        })
        document.getElementById('abc').innerHTML=rows   
    },1000)
}
createEmployee({eid:103,ename:"priyanka",esal:65000})
getEmployees()