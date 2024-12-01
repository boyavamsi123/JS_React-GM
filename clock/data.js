setInterval(()=>{
    let dt = new Date();
    let ct=dt.toLocaleTimeString();
    //document.querySelector('.ct').innerHTML="GM"
    document.querySelector('.ct').innerHTML=ct;
},1000)