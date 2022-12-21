function validate(){
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let userName = document.getElementById('user-name').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value
    let phone = document.getElementById('phone').value
    let website = document.getElementById('website').value
    let company = document.getElementById('company').value
    console.log(firstName,lastName,email,address,phone,website,company);

    //To check if error exists to display alert of success message
    let error = false;
    
    let excludeChar = /[~!@#$%&*()+=;:<>,.?/|{}`]/

    // first name
    if(excludeChar.test(firstName) || firstName.length < 3){
        error = true;
        document.getElementById('invalid-first-name').style.display = 'block';
        document.getElementById('valid-first-name').style.display = 'none';
       
    }
    else{
        document.getElementById('valid-first-name').style.display = 'block';
        document.getElementById('invalid-first-name').style.display = 'none';
    }


    // last name
    if(excludeChar.test(lastName) || lastName.length < 3){
        error = true;
        document.getElementById('invalid-last-name').style.display = 'block';
        document.getElementById('valid-last-name').style.display = 'none';
        
    }
    else{
        document.getElementById('valid-last-name').style.display = 'block';
        document.getElementById('invalid-last-name').style.display = 'none';
    }


    // Username
    let userNameChar = /[~!@#$%&*()+=;:<>,?/|{}`]/
    if(userNameChar.test(userName) || !userName.includes('.')){
        error = true;
        document.getElementById("invalid-user-name").style.display = 'block';
        document.getElementById("valid-user-name").style.display = 'none';
    }
    else{
        document.getElementById("valid-user-name").style.display = 'block';
        document.getElementById("invalid-user-name").style.display = 'none';

    }

    // Email
    
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

    
    // Address
    if(address.length<1){
        error = true;
        document.getElementById("invalid-address").style.display = 'block';
        document.getElementById("valid-address").style.display = 'none';
    }
    else{
        document.getElementById("valid-address").style.display = 'block';
        document.getElementById("invalid-address").style.display = 'none';
    }

    // Phone Number
    let phoneNumber = /\d{3}-?\d{3}-?\d{4}/

    if(phoneNumber.test(phone) && phone.charAt(3)==='-' && phone.substr(8,11).length === 4){
        console.log(phone.substr(7,11));
        document.getElementById("valid-phone").style.display = 'block';
        document.getElementById("invalid-phone").style.display = 'none';
    }
        
    else{
        error = true;
        console.log(phone.substr(8,11));
        document.getElementById("invalid-phone").style.display = 'block';
        document.getElementById("valid-phone").style.display = 'none';
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
	document.getElementById('valid-user-name').style.display = 'none'
	document.getElementById('valid-phone').style.display = 'none'
	document.getElementById('valid-address').style.display = 'none'
}