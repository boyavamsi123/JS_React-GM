let employees=[
    {eid:101,ename:"NTR",sal:88000},
    {eid:102,ename:"Allu Arjun"}
]
let createEmployee=(emp)=>{
    setTimeout(()=>{
        employees.push(emp)
    },4000)
}
let getEmployee=()=>{
    setTimeout(()=>{
        let rows="";
        employees.forEach((emp)=>{
            rows=rows+`
            <tr>
            <td>${emp.eid}</td>
            <td>${emp.ename}</td>
            <td>${emp.esal}</td>
            </tr>
            `
        })
        document.getElementById('abc').innerHTML=rows
        //document.getElementById('abc').innerHTML="GM"
    },4000)
}
createEmployee({eid:103,ename:"sai pallavi",sal:65000})
getEmployee()