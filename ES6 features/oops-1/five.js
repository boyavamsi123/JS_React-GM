class Account{
    acc_Id=101;
    open_Account(){
        console.log("Account Opened Successfully!")
    }
    deposit_Amount(){
        console.log("Amount Deposited Successfully!")
    }
    withdrawl_Amount(){
        console.log("Insuffienet Funds")
    }
    get_Bal(){
        console.log("Low Balance")
    }
    get_St(){
        console.log("Pay 50 INR")
    }
    close_Account(){
        console.log("Pay - -Ve Bal! and close")
    }

}
let a1 =new Account();
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl_Amount()
a1.get_Bal()
a1.get_St()
a1.close_Account()