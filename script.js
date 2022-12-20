function validate(){
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let state = document.getElementById('state').value
    let city = document.getElementById('city').value
    let zipCode = document.getElementById('zip-code').value //number from input is converted into string
    let t_and_c = document.getElementById('t-and-c').checked
    console.log(firstName,lastName,email,city,zipCode,t_and_c);

    //To check if error exists to display alert of success message
    let error = false;


    if(firstName.length >= 2){
        document.getElementById('valid-first-name').style.display = 'block';
        document.getElementById('invalid-first-name').style.display = 'none';
    }
    else{
        error = true;
        document.getElementById('invalid-first-name').style.display = 'block';
        document.getElementById('valid-first-name').style.display = 'none';
    }


    if(lastName.length >= 2){
        document.getElementById('valid-last-name').style.display = 'block';
        document.getElementById('invalid-last-name').style.display = 'none';
    }
    else{
        error = true;
        document.getElementById('invalid-last-name').style.display = 'block';
        document.getElementById('valid-last-name').style.display = 'none';
    }


    /*  Email:
        1.Must include '@'
        2.Must include '.'
        3.At least one character before '@' 
        4.At least two characters after last'.'
    */

    // my code (email.charAt(0)!=='@') && (email.charAt(email.length-1)!=='.' && (email.charAt(email.length-2)!=='.'))
    if(email.includes('@') && 
        email.includes('.') && 
        email.indexOf("@")>0 && 
        // email.substr(email.lastIndexOf('.')+1).length>=2)
        email.substr(email.lastIndexOf('.')+1).length>=2)
        {
        document.getElementById("valid-email").style.display = 'block';
        document.getElementById("invalid-email").style.display = 'none';
    }
    else{
        error = true;
        document.getElementById("invalid-email").style.display = 'block';
        document.getElementById("valid-email").style.display = 'none';
    }

    //state
    if(state!='Choose...'){
        document.getElementById("valid-state").style.display = 'block';
        document.getElementById("invalid-state").style.display = 'none';
    }
    else{
        error = true;
        document.getElementById("invalid-state").style.display = 'block';
        document.getElementById("valid-state").style.display = 'none';
    }




    //City : At least 3 characters

    if(city.length<3){
        error = true;
        document.getElementById("valid-city").style.display = 'none';
        document.getElementById("invalid-city").style.display = 'block';
    }
    else{
        document.getElementById("valid-city").style.display = 'block';
        document.getElementById("invalid-city").style.display = 'none';
    }

    /* Zip:
        1.It should have exact 6 characters
        2. Only numbers allowed
    */
   
    let numberZip = parseInt(zipCode)
    //using input = number in html
    if(!isNaN(numberZip) && 
        numberZip > 100000 && 
        numberZip <999999
    ){
        document.getElementById("valid-zip").style.display = 'block';
        document.getElementById("invalid-zip").style.display = "none";
    }
    else{
        error = true;
        document.getElementById("valid-zip").style.display = 'none';
        document.getElementById("invalid-zip").style.display = "block";
    }


    /* use parseInt(zipCode)
    !isNaN(parseInt(zipCode))
    isNaN is function that checks if the expression/statement is number or not
    */

    //EDGE CASE of parseInt
    //123xax gets converted into 123 , it doesn't throw an error


    if(t_and_c){
        
        document.getElementById("tNc-invalid").style.display = "none"
    }
    else{
        error = true;
        document.getElementById("tNc-invalid").style.display = "block"
    }



    // If no error
    // 1. Show alert with Success Message
    // 2.Reset all fields


    // if(error === false)
    if(!error){
        window.alert("Your details have been saved successfully");
        resetFields();
    }

}


function resetFields () {
    //reset only resets field of HTML forms
	document.getElementById('registration-form').reset()

	document.getElementById('valid-first-name').style.display = 'none'
	document.getElementById('valid-last-name').style.display = 'none'
	document.getElementById('valid-email').style.display = 'none'
	document.getElementById('valid-city').style.display = 'none'
	document.getElementById('valid-state').style.display = 'none'
	document.getElementById('valid-zip').style.display = 'none'
	document.getElementById('valid-tNc').style.display = 'none'
}