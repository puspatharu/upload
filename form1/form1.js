



let reg=/[0-9]/g;
let regular=/[a-zA-Z]/g
let regular1=/[a-zA-z0-9]/g
let regular2=/[!@#$%^&*(),.?":{}|<>]/g

let regular3=/[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]/g;

let regular4=/^[A-Za-z]+$/;
let regular5=/^(?=.*[0-9].*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/
// let regular5=/[^A-Za-z0-9]/g


// let username=''
// let password='';
// let contact='';

// function userName(a){
// console.log(a);
// username+=a;
// if(username.length>0){
// alert('input is fill');
// }
// }

// function pass(b){
//   console.log(b);
//   password+=b;
//   if(password.length<5){
// alert(' enter password greater than 5')
//   }
//   }

//   function phone(c){
//     console.log(c);
//     contact+=c;
//     if(contact.length<10||contact.length>10){
// alert(" enter 10 digit number")
//     } 
//     else if(isNaN(contact)){
//       alert("enter only number")
//     }
//     }

// let data={

// };
    // function inputField(a,b){



      // ********* second method********

      // console.log(a,b);
      // data={
      //   ...data,
      //   [b]:a
      // }

      // ******** first method*******

//       if('username'==b){
//         username=a;
        
//       }
//       else if('password'==b){
//         password=a;
//       }
// else if('contact'==b){
// contact=a;

// }

    // }
   

    function submitButton(){
// *******third method********


let username=document.getElementById('username').value;
let password=document.getElementById('password').value;
let contact=document.getElementById('contact').value

let displayusername=document.getElementById('displayusername')
let displaypassword=document.getElementById('displaypassword')
let displaycontact=document.getElementById('displaycontact')
let display=document.getElementById('display');
// console.log(username.match(regular));

if(!username.match(regular4) || username===''){
 displayusername.innerText=`enter valid username`; 
}

console.log(password);
 if(password.length<5 || password==='' || !password.match(regular5)){
displaypassword.innerText='enter valid password';
} 
 if(contact.length<10 || contact.length>10 || contact===''){
displaycontact.innerText='enter 10 digit number';
}

if(displayusername.innerText==="" || displaypassword.innerText==="" || displaycontact.innerText===""){
  display.textContent='Thank you'
  display.style.transform='translateY(0px)'
  // display.style.transform='translateX(0)'

  // display.style.translate='0 80px';
  display.style.transition='all 3s ease-in-out'
  
}






// if(username.match(regular4)?.length>0 && password.match(regular3)?.length>5 && contact.match(reg)?.length===10 ){

  // console.log(`username:${username},password:${password},contact:${contact}`);
  // console.log('submit');

//   display.innerHTML='submit'
// }else{

  // console.log(`username:${username},password:${password},contact:${contact}`);
  // console.log('error');

//   display.innerHTML='error'
// }







// ***************regular expression*************

// console.log(username.match(reg));

// if(username.match(reg)?.length>0){
//   console.log(username);
//   }

//   console.log(username.match(regular));

// if(username.match(regular)?.length>0){
//   console.log(username);
//   }


  // console.log(username.match(regular1));

  // if(username.match(regular1)?.length>0){
  //   console.log(username);
  //   }

  // console.log(username.match(regular2));

  //  if(username.match(regular2)?.length>0){
  //   console.log(username);
  //  }

  //  console.log(username.match(regular3));

  //  if(username.match(regular3)?.length>0){
  //   console.log(username);
  //  }

// if(username.length>0 && password.length>5 && contact.length===10){
// console.log('submit');
// }
// else {
//   console.log('error');
// }






// ********second method******

// if(data && data?.username?.length>0 && data?.password?.length>5 && data?.contact?.length===10){
//   console.log('submit');
// }else{
//   console.log('error');
// }
// *********first method******

// if(username.length>0 && password.length>5 && contact.length===10){
// console.log("submited");
// } else{
//   console.log('error');
// }
    }