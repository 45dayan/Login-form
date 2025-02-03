let username = document.querySelector("#username");
let password = document.querySelector("#password");
let btn = document.querySelector("button");
let message = document.querySelector("body");
function Validate() {
    let uservalue = username.value.trim();
    let passvalue = password.value.trim();
        
     if(uservalue == "" && passvalue == ""){
        console.log('All fields are mandatory');
        message.innerText = 'Username and Password are mandatory ';
        message.style.fontSize = '30px';
        
    }  else if((uservalue == 'helloworld' || uservalue == 'HELLOWORLD') && 
        (passvalue == 'helloworld123' || passvalue  == 'HELLOWORLD123')){
        console.log('Login successfull');
        message.innerText = 'Login successfull✅';
        message.style.color = 'green';
        message.style.fontSize = '30px';
} else {
        console.log('invalid details !');
        message.innerText = 'Invalid credentials ❌';
        message.style.color = 'red';
        message.style.fontSize = '30px';
    }

}
btn.addEventListener('click',Validate);