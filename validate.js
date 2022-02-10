
let successM= document.getElementById('success');
let errorM = document.getElementById('error');
let fnameInput = document.getElementById('firstname');
let resInput = document.getElementById('residence');
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let messageInput = document.getElementById('message');

const contForm = document.forms['contForm'];
contForm.addEventListener('submit',checkInputs)

const fullName = document.forms['contForm']['fullname']
const Residence = document.forms['contForm']['residence']
const userName = document.forms['contForm']['username']
const Password = document.forms['contForm']['password']
const Message = document.forms['contForm']['message']


function checkInputs(event){
    event.preventDefault()
    console.log(event);
    if(fullName.value == '' || fullName.value.length >10){
        errorM.innerHTML="Valid name required"
        errorM.style.color='red'
        fnameInput.style.backgroundColor = 'pink'
        fullName.focus()
        return false
    }
    
    if(Residence.value == ''|| Residence.value.length >10){
        errorM.innerHTML="Valid residence required"
        errorM.style.color='red'
        resInput.style.backgroundColor = 'pink'
        Residence.focus()
        return false
    }
    if(userName.value == ''|| userName.value.length <7){
        errorM.innerHTML="Valid username required"
        errorM.style.color='red'
        usernameInput.style.backgroundColor = 'pink'
        userName.focus()
        return false
    }
        
    if(Password.value == ''){
        errorM.innerHTML="password required"
        errorM.style.color='red'
        passwordInput.style.backgroundColor = 'pink'
        Password.focus()
        return false
    }
    if(Message.value == ''){
        errorM.innerHTML="message required"
        errorM.style.color='red'
        messageInput.style.backgroundColor = 'pink'
        Message.focus()
        return false
    }


  alert ('Success'); 
    
}




      
