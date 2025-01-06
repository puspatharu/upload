
const submitform=document.getElementById('submitform')
submitform.addEventListener('submit',(e)=>{
e.preventDefault();
let isvalid=true;
let message='';
const username=document.getElementById('username').value
if(username.length<3){
message+=`username is more than 3 `
// console.log(message);
isvalid=false;
}
const password=document.getElementById('password').value
if(password.length<5){
message+=`password is greater than 5 `
// console.log(message);
isvalid=false;
}
const contact=document.getElementById('contact').value
if(contact.length>10 || contact.length<10){
message+=`phone number must be 10 digit `
// console.log(message);
isvalid=false;
}
let regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const email=document.getElementById('email').value
if(!email.match(regex)){
  message+=`email must be valid `
  isvalid=false;
  // console.log(message);
}
if(isvalid){
  alert("form is submitted successfully");
}else{
  alert(`form isnot submit: ${message}`);
}
})