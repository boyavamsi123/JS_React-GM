setInterval(()=>{

let dt = new Date();
let ct=dt.toLocaleTimeString(); 
document.querySelector('.ct').innerHTML=ct;
//document.querySelector('.ct').innerHTML="GM"
},1000)