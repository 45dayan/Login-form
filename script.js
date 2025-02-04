let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn = document.querySelector("button");

function Validate() {
    let uservalue = username.value.trim();
    let passvalue = password.value.trim();
    let emailvalue = email.value.trim();
        
     if(uservalue == "" && emailvalue == "" && passvalue == ""){
       alert('All fields are mandatory');
        
        
    }  else if((uservalue == 'helloworld' || uservalue == 'HELLOWORLD') && 
    (emailvalue == "helloworld@gmail.com" || emailvalue == 'HELLOWORLD@GMAIL.COM') &&
    (passvalue == 'helloworld123' || passvalue  == 'HELLOWORLD123')){
        alert('Login successfull');
       
} else {
        alert('invalid credentials!');
        
    }

}
btn.addEventListener('click',Validate);
