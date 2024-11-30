let goTOMovie=(success,failure)=>{
    let bal=1000;
    if(bal>500){
         success("Go To Movie")
    }
    else{
        failure("Go TO PG! Take Blanket")
    }
}

goTOMovie((msg)=>{
    console.log(msg);
},(err)=>{
    console.log(err);
})