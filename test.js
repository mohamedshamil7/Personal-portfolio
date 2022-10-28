
validateName = () => {
    console.log("gg");
    alert("hhh")
    }
    


    var name= document.getElementById('f-name').value;
    if(name.length ==0){
        console.log("nbhbh" );
        nameError.innerHTML='Name is required';
        return false;
    }

    
    nameError.innerHTMLvalid ='valid'
    return true;