function validateLoginForm(){
    //alert('Login successfully')
    let email = document.getElementById('email').value;

    if(email==""){
        //alert("please enter email")
        document.getElementById('emailMsg').innerHTML="Please Enter Email"
    }
    else{
        alert(email)
    }

    return false;
}