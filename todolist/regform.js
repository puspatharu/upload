
let regex1=/^[A-Za-z]+$/;

const submitbutton=document.getElementById('btn');
submitbutton.addEventListener('click',()=>{
  const username=document.getElementById('username').value
  const age=document.getElementById('age').value;
  const contact=document.getElementById('contact').value;

const usertext=document.getElementById('usertext');
const agetext=document.getElementById('agetext');
const numbertext=document.getElementById('numbertext');

  if(username==="" || !username.match(regex1)){
   usertext.innerText= 'enter valid username'
  }

  if(age==='' || age<18){
   agetext.innerText= 'enter valid age';
  }

  if(contact.length>10 || contact.length<10 || contact==""){
    numbertext.innerText='enter valid number'
    console.log(numbertext);
  }

  let mycart=[];
  if(usertext.innerText=='' && agetext.innerText=='' && numbertext.innerText==''){
    const cart=document.getElementById('cart')
   
    mycart.push({
      username:username,
      age:age,
      contact:contact
    })
    mycart.forEach((val,i)=>{
      // console.log(val);
      cart.innerHTML+=`<div id="textdisplay">
      <div id="cardpara">Card</div>
      <div>username:${val.username}</div>
      <div>age:${val.age}</div>
      <div>contact ${val.contact}</div>
      </div>
      `
    });
}
});

// function inputValidate(){
// }