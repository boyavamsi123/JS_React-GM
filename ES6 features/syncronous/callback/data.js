let employees=[
    {eid:101,ename:"NTR",esal:88000},
    {eid:102,ename:"Allu Arjun",esal:99000}
]
let createEmployee=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
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
createEmployee({eid:103,ename:"sai pallavi",esal:65000},getEmployee)