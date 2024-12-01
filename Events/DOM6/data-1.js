let employees=[
    {eid:101,ename:"Rahul",sal:45000},
    {eid:102,ename:"Sonia",sal:55000},
    {eid:103,ename:"Priyanka",sal:65000}
]
function displayData(){
    //alert("Test Case 123")
    let rows=""
    for(let emp of employees ){
        rows = rows + "GM"
    }
    document.getElementById('abc').innerHTML=rows
    //document.getElementById('abc').innerHTML="GM"
}