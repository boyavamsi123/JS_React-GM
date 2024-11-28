class Account{
    acc_Id=101;
  }
  let a1 = new Account();
  console.log(a1)
  console.log(a1.acc_Id)
  console.log(a1.acc_Name)//undefined
  //If we are try to access object property,
  //which is not exists we will get undefined.