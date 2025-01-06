

const myarr=["hello",'how are you','hi'];

const myarr2=[{
  name:'sita',
  roll:24,
  
},
{
  name:'Gita',
  roll:17,
 
}
]
let editindex=null;

const username=document.getElementById('input');
const button=document.getElementById('btn')
const buttontext=button.innerText;
button.addEventListener('click',function(){
  const input=username.value;
  console.log(input);
  // myarr.push(input);

  if(editindex!==null){
    //edit
    myarr2.splice(editindex,1,{name:input,roll:13});
    editindex=null;
  }
  else{
//insert
    myarr2.push({
      name:input,
   roll:13,
  }
);
  }

  // datashow(myarr);
  datashow(myarr2);
  button.innerText=buttontext;
})


function datashow(a){
  // for(let i=0;i<myarr.length;i++){
  //   console.log(myarr[i]);
  // }
  
  // map(function(value,index))
  
  const text=document.getElementById('text');
  text.innerHTML=""
  a.map((item,i)=>{
    console.log(item);
  
    text.innerHTML+=`<div id="box"> 
     ${item.roll}.${item.name}
     <div>
    <button id="edit" onclick="edit(${i})">Edit</button>
    <button id="delbtn" onclick=" delete1(${i}) ">delete</button>
    </div>
    </div>
    `

  })
}
function edit(a){
editindex=a;
  username.value=myarr2[a].name;
button.innerText='Edit text';


}
function delete1(a){
  myarr2.splice(a,1);
  datashow(myarr2);

}

// datashow(myarr);
datashow(myarr2);




