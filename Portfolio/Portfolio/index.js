let name;

let email;
let message;


const container=document.getElementById('form-status')
const div=document.createElement('div');
const form=document.getElementById('contact-form')
form.addEventListener('submit',function (event){
    event.preventDefault()
    name=document.getElementById('name').value;
    email=document.getElementById('email').value;
    message=document.getElementById('message').value;






div.innerHTML=`
<div>name:${name}</div>
<div>Email::${email}</div>
<div>Message:${message}</div>



`
container.append(div)

})
   
const skillList=document.getElementById('skills-list');
const list=document.createElement('li')
const list2=document.createElement('li')

list.innerText="React"
skillList.append(list)
list2.innerText="Node"
skillList.append(list2)