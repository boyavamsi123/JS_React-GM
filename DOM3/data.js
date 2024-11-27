let employees=[
        {"id":1,"name":"Lukas","email":"lromei0@cam.ac.uk","gender":"Male"},
        {"id":2,"name":"Veronika","email":"vstruis1@topsy.com","gender":"Female"},
        {"id":3,"name":"Isadora","email":"ieytel2@marriott.com","gender":"Female"},
        {"id":4,"name":"Shelba","email":"sdaughton3@time.com","gender":"Female"},
        {"id":5,"name":"Reece","email":"rkenefick4@miibeian.gov.cn","gender":"Male"},
        {"id":6,"name":"Cosimo","email":"cbaines5@networkadvertising.org","gender":"Male"},
        {"id":7,"name":"Tibold","email":"tmoffatt6@facebook.com","gender":"Agender"},
        {"id":8,"name":"Tore","email":"tklisch7@comsenz.com","gender":"Male"},
        {"id":9,"name":"Jacquenette","email":"jweare8@flickr.com","gender":"Female"},
        {"id":10,"name":"Judi","email":"jbartalot9@soup.io","gender":"Genderqueer"},
        {"id":11,"name":"Atalanta","email":"akeelera@furl.net","gender":"Genderqueer"},
        {"id":12,"name":"Bary","email":"bgreenshielsb@house.gov","gender":"Male"},
        {"id":13,"name":"Dionne","email":"dbrundallc@engadget.com","gender":"Female"},
        {"id":14,"name":"Tobye","email":"tbourgaized@meetup.com","gender":"Female"},
        {"id":15,"name":"Gery","email":"gsartene@nih.gov","gender":"Male"},
        {"id":16,"name":"Eustace","email":"estempf@naver.com","gender":"Male"},
        {"id":17,"name":"Nelie","email":"nlabdong@amazon.co.uk","gender":"Agender"},
        {"id":18,"name":"Bonnibelle","email":"bfirebraceh@godaddy.com","gender":"Female"},
        {"id":19,"name":"Cornelius","email":"ccostellowi@yale.edu","gender":"Genderfluid"},
        {"id":20,"name":"Catherin","email":"ccalverleyj@scribd.com","gender":"Genderfluid"},
        {"id":21,"name":"Grover","email":"gwrintmorek@google.com.au","gender":"Male"},
        {"id":22,"name":"Jamil","email":"jwisaml@wired.com","gender":"Male"},
        {"id":23,"name":"Piotr","email":"pfruinm@who.int","gender":"Male"},
        {"id":24,"name":"Chauncey","email":"cyoungen@alexa.com","gender":"Male"},
        {"id":25,"name":"Terza","email":"tfarraro@xing.com","gender":"Female"},
        {"id":26,"name":"Ernestus","email":"esymcockp@dedecms.com","gender":"Male"},
        {"id":27,"name":"Kaspar","email":"kgravestonq@ftc.gov","gender":"Male"},
        {"id":28,"name":"Tedi","email":"tovensr@redcross.org","gender":"Female"},
        {"id":29,"name":"Laney","email":"lsimmances@unc.edu","gender":"Bigender"},
        {"id":30,"name":"Nanette","email":"nseldnert@phpbb.com","gender":"Female"},
        {"id":31,"name":"Ina","email":"imaccrackenu@nbcnews.com","gender":"Female"},
        {"id":32,"name":"Gill","email":"ghilldrupv@webeden.co.uk","gender":"Female"},
        {"id":33,"name":"Flint","email":"fbumphriesw@ihg.com","gender":"Non-binary"},
        {"id":34,"name":"Dicky","email":"dcirlosx@nasa.gov","gender":"Male"},
        {"id":35,"name":"Sumner","email":"swigany@istockphoto.com","gender":"Male"},
        {"id":36,"name":"Hyman","email":"hsilverstonz@house.gov","gender":"Male"},
        {"id":37,"name":"Lauralee","email":"lscanterbury10@nytimes.com","gender":"Female"},
        {"id":38,"name":"Livy","email":"lrandals11@infoseek.co.jp","gender":"Female"},
        {"id":39,"name":"Orville","email":"odonizeau12@networksolutions.com","gender":"Male"},
        {"id":40,"name":"Arni","email":"amepham13@mit.edu","gender":"Male"},
        {"id":41,"name":"Hester","email":"higlesiaz14@unblog.fr","gender":"Female"},
        {"id":42,"name":"Janeva","email":"jlohoar15@senate.gov","gender":"Female"},
        {"id":43,"name":"Julius","email":"jdegan16@360.cn","gender":"Agender"},
        {"id":44,"name":"Clarine","email":"ccrickmoor17@accuweather.com","gender":"Female"},
        {"id":45,"name":"Halsey","email":"hchampionnet18@ehow.com","gender":"Male"},
        {"id":46,"name":"Lurette","email":"lzapata19@slideshare.net","gender":"Female"},
        {"id":47,"name":"Mort","email":"mgreveson1a@theglobeandmail.com","gender":"Male"},
        {"id":48,"name":"Kamila","email":"kyakunikov1b@squidoo.com","gender":"Female"},
        {"id":49,"name":"Cliff","email":"cbeloe1c@php.net","gender":"Male"},
        {"id":50,"name":"Crawford","email":"cstear1d@liveinternet.ru","gender":"Male"},
]
    function displayData(){
    let rows=""
    for(let emp of employees){
        rows = rows+ `<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.email}</td>
        <td>${emp.gender}</td>
        </tr>`
    }
    document.getElementById('abc').innerHTML=rows
    //alert("test case 123")
    //document.getElementById('abc').innerHTML="GM"
}