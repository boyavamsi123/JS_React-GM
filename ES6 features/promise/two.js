let goToATM=(success,failure)=>{
    let bal=600;
    if(bal>500){
         success("withdraw ammount")
    }
    else{
        failure("pls take you'r card")
    }
}

goToATM((msg)=>{
    console.log(msg);
},(err)=>{
    console.log(err);
})