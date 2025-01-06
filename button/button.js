
  // const button=document.getElementById('btn');
  // console.log(button);
  // button.addEventListener('click',function(){
  //   console.log('click');
  // })

  // const box1=document.getElementById('first');
  // window.addEventListener('scroll',function(){
    
  //  console.log('scroll1');
  // })
  // const box2=document.getElementById('second');
  // window.addEventListener('scroll',function(){
  //  console.log('scroll2');
  // })

 
  
  const submit=document.getElementById('submit')
  submit.addEventListener('click',function(){
    const username=document.getElementById('username').value;
    const password=document.getElementById('password1');
    console.log(username);
   console.log(password.value);
    if(username==="" || password==="" || username.length<3 || password.length<5){
console.log("form is not submit");
    }else{
      console.log('submit');
    }

  })