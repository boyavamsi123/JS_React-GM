let user={
    uid:101,
    uname:"rahul",
    address:{
        city:"Bangalore",
        pin:560038,
        landmark:'marathahalli bridge'
    },
    phone:9346148860
}
let {address}=user
let {landmark}=address

console.log(landmark);
console.log(user.address.landmark);