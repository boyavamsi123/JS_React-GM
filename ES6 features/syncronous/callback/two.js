let goToShopping = (success,failure)=>{
    let bal=2000;
    if(bal>5000){
        success("Eligible With Shopping!..")
    }
    else{
        failure("Not Eligible With Shopping!..")
    }
}
goToShopping((msg)=>{
    console.log(msg);
},(err)=>{
    console.log(err);
})