


let regex1=/^[A-Za-z]+$/;
let regex2=/^(?=.*[0-9].*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/

// function submitButton(){

const button=document.getElementById('btn')
button.addEventListener('click',()=>{

    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    const contact=document.getElementById('contact').value;
    
    const displayusername=document.getElementById('displayusername');
    const displaypassword=document.getElementById('displaypassword');
    const displaycontact=document.getElementById('displaycontact');
    const display=document.getElementById('display');
  
  
  
  if(!username.match(regex1) || username===''){
  displayusername.innerText="Enter a valid username"
  }
  if(password==='' || !password.match(regex2) || password.length<5){
  displaypassword.innerText='Enter a valid password'
  }
   if(contact==='' || contact.length>10 || contact.length<10){
  displaycontact.innerText='enter 10 digit number '
  }
  
  if(displayusername.innerText==='' || displaypassword.innerText==='' || displaycontact.innerText===''){
  display.style.transition='all 4s ease-in-out'
  display.style.transform='translateX(0px)'
  }
})


// }
