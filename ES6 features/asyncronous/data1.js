let Employees = [
    {Eid:101, Name: "vamsi", salary: 45000},
    {Eid:102, Name: "mani", salary: 55000}
  ];
  
  
  let createEmp = (emp) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Employees.push(emp);
        resolve();
      }, 1000);
    });
  };
  
  
  let getEmp = () => {
    return new Promise((resolve, reject) => {
      let Emp = true; 
      if (Emp) {
        let rows = "";
        setTimeout(() => {
          Employees.forEach(emp => {
            rows += `<tr>
                       <td>${emp.Eid}</td>
                       <td>${emp.Name}</td>
                       <td>${emp.salary}</td>
                     </tr>`;
          });
          document.getElementById("abc").innerHTML = rows;
          resolve();
        }, 500);
      } else {
        reject("Error: No employees found");
      }
    });
  };
  
  
  let execute = ()=>{
    createEmp({Eid:103,Ename:"ashu",Esal:65000})
    getEmp()
  }
  execute(()=>{
    console.log(object);
  })