var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('Submit-error');


function validateName(){
// alert("hiii");
var name= document.getElementById('f-name').value

if(name.length ==0){

    nameError.innerHTML='Name is required';
    return false;
}

if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    // alert("hai")
    nameError.innerHTML='write fulll name';
    return false;
}
nameError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
return true;
}

function validateEmail(){
    var email =document.getElementById('f-email').value;

    if(email.length==0){
        emailError.innerHTML='email required';
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML='invalid email';
        return false;
    }
    emailError.innerHTML ='<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validatePhone(){
    var phone =document.getElementById('f-phone').value;
    if(phone.length==0){
        phoneError.innerHTML='phone number is required';
        return false;
    }

    if(phone.length!== 10){
        phoneError.innerHTML='Phone number should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Phone number error';
        return false;
    }
    phoneError.innerHTML ='<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validateMessage(){
    var message=document.getElementById('f-message').value;
    var req = 10;
    var left= req-message.length;

    if(left>0){
        messageError.innerHTML= left+ 'more characters required';
        return false;
    }
    messageError.innerHTML ='<i class="fa-solid fa-circle-check"></i>'
    return true;

}

function validateForm(){
    if(! validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display ='block';
        submitError.innerHTML= 'Please fix error to submit';
        setTimeout(function(){submitError.style.display ='none';},3000);
        return false;
    } 
    else{
        return true;
    }
}
