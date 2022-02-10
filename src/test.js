function check(){
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var p1=document.getElementById("name-error");
    var p2=document.getElementById("phone_error");
    document.getElementById("name").style.borderBlockColor="1 px solid black";
    document.getElementById("phone").style.borderBlockColor="1 px solid black"


if(!Name){
    p1.innerHTML="<p class='red'> Name is required></p>";
    document.getElementById("name").style.borderBlockColor="red";
}
else if(!isNaN(Name)){
    P1.innerHTML="<p class='red'>required a string</p>";
    document.getElementById("name").style.borderBlockColor="red";
}
if(!phone){
    p2.innerHTML="<p class='red'>required a phone no</p>";
    document.getElementById("phone").style.borderBlockColor="red";
}
else if(isNaN(phone)){
    p2.innerHTML="<p class='red'>phone no must be a no</p>";
    document.getElementById("phone").style.borderBlockColor="red";
}
if(phone.length==10){
    p2.innerHTML="<p class='red'>must be off 10 digitso</p>";
    document.getElementById("phone").style.borderBlockColor="red";
}
}