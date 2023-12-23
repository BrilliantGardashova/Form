var inputphone = document.querySelector(".input-phone");
var formcontrol =document.querySelector(".form-control");
var emailmessage = document.querySelector(".email-message");
var form = document.getElementById("form");

document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();

if(formcontrol.value.trim()===""){
    
   emailmessage.textContent = "Xananı doldurun"
   emailmessage.style.color = "red"
   formcontrol.style.border = "1px solid red"

}
else{
    emailmessage.textContent = ""
    emailmessage.style.border = "1 px solid black"
    
    if(!formcontrol.value.includes("@")){
        emailmessage.textContent = "hesab@hesab.az və ya 994 00 123 45 67"
        emailmessage.style.color="red"
        emailmessage.style.color = "1 px solid red"
    }
}})