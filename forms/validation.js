var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('Submit-error');


function validatename(){
    var name= document.getElementById('f-name').value;
    if(name.length ==0){
        console.log("nbhbh" );
        nameError.innerHTML='Name is required';
        return false;
    }

    if(!name.match(/^[a-Za-z]+ [A-Za-z]&/)){
        nameError.innerHTML='Write full name';
        return false;
    }
    nameError.innerHTMLvalid ='valid'
    return true;
}
