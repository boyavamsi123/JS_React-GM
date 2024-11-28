class Account{
    acc_Name="Rahul";
    acc_Bal=0;

    deposit_Amount(amount){
        console.log(amount)
    }
}
let a1=new Account();
console.log(a1);
console.log(a1.acc_Name);
console.log(a1.acc_Bal);
a1.deposit_Amount(501)
a1.deposit_Amount(50)