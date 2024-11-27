class account{
    acc_Id=101;
    acc_Bal=5000;
    open_account(){
        console.log('A/C opened');
    }
    deposit_amount(){
        console.log('Amount dep');
    }
}
let a1 = new account();
console.log(a1.acc_Id);
console.log(a1.acc_Bal);
a1.open_account()
a1.deposit_amount()