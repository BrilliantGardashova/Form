var phone = document.querySelector("#phone");
var phonemessage = document.querySelector(".phone-message");
var form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    if (phone.value.trim() === "") {
        phonemessage.textContent = "Mobil nomrenizi daxil edin";
        phonemessage.style.color = "red";
        phone.style.border = "1px solid red";
    }
    else {
        phonemessage.textContent = "";
        phone.style.border = "1px solid black";

        if (!phone.value.includes("+994")) {
            phonemessage.textContent = "Məsələn +994 51 467 73 33";
            phonemessage.style.color = "red";
            phone.style.border = "1px solid red";
        }
    }
   

    // email


    var emailmessage = document.querySelector(".email-message");
    var email = document.querySelector("#mail")

    if (email.value.trim() === "") {
        emailmessage.textContent = "Emailinizi daxil edin";
        emailmessage.style.color = "red";
        email.style.border = "1px solid red";
    } 
    else {
        emailmessage.textContent = "";
        email.style.border = "1px solid black";

        if (!email.value.includes("@")) {
            emailmessage.textContent = "Məsələn hesab@23.az";
            emailmessage.style.color = "red";
            email.style.border = "1px solid red";
        }
    }

});