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

    // if(error === false)
    if(!error){
        fillForm(firstName,lastName,userName,email,address,phone,website,company)
        // window.alert("Your details have been saved successfully");
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



var num = 1;
function fillForm(firstName,lastName,userName,email,address,phone,website,company){
    const table = document.getElementById('myTable');
    const row = table.insertRow(-1);
    const cell1 = row.insertCell([0]);
    const cell2 = row.insertCell([1]);
    const cell3 = row.insertCell([2]);
    const cell4 = row.insertCell([3]);
    const cell5 = row.insertCell([4]);
    const cell6 = row.insertCell([5]);
    const cell7 = row.insertCell([6]);
    const cell8 = row.insertCell([7]);
    
    
    cell1.textContent = num++;
    cell2.textContent = firstName + lastName;
    cell3.textContent = userName;
    cell4.textContent = email;
    cell5.textContent = address;
    cell6.textContent = phone;
    cell7.textContent = website;
    cell8.textContent = company;

    


    
}


const tableApi = (firstName,lastName,userName,email,address,phone,website,company) =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {data.forEach(user => {
        console.log(data)
        
        let nameApi = user.name;
        let userNameApi = user.username;
        let emailApi = user.email;
        let addressApi = user.address.street + ", " + user.address.suite + ", " + user.address.city + ", " + user.address.zipcode;
        let phoneApi = user.phone;
        let websiteApi = user.website;
        let companyApi = user.company.name + ", " + user.company.catchPhrase + ", " + user.company.bs;
        const table = document.getElementById('myTable');
        const row = table.insertRow();
        const cell1 = row.insertCell([0]);
        const cell2 = row.insertCell([1]);
        const cell3 = row.insertCell([2]);
        const cell4 = row.insertCell([3]);
        const cell5 = row.insertCell([4]);
        const cell6 = row.insertCell([5]);
        const cell7 = row.insertCell([6]);
        const cell8 = row.insertCell([7]);

        cell1.textContent = num++;
        cell2.textContent = nameApi;
        cell3.textContent = userNameApi;
        cell4.textContent = emailApi;
        cell5.textContent = addressApi;
        cell6.textContent = phoneApi;
        cell7.textContent = websiteApi;
        cell8.textContent = companyApi;
    });})
    .catch(err => window.alert("Something went wrong while fetching the users."));
}

window.onload = tableApi()