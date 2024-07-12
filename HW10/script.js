const thisyear=2024

function Allowedbirthdate(x,y){
   return x-y
}


function signin(){
    
    let birth=document.getElementById("birth-date-input").value
    console.log(Date(birth))
    let result=Allowedbirthdate(thisyear,(new Date(birth)).getUTCFullYear())

    console.log(result)
    if (result < 18){
    alert("age is not ok")
}
else
alert("firstname,lastname,birthdate");
}
function password(){
  const code = document.getElementById("password-input").value;
  if (code !=114 ){
  alert("maktab code is not correct")
  }
}
let email=document.getElementById("email-input")
let str = "@";
if(email==str){
    alert("email")
}
{ top: e.pageY, left: e.pageX }

$("#my_image").mouseenter(function() {
  $('#my_image').html('<img src="https://www.lookkle.com/blog/static/images/javascript-intro.JPG" style="width:200px;height:200px;">');
});
