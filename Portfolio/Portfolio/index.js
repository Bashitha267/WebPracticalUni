let name;

let email;
let message;

let mess=[
    {
        name,
        email,
        message,
    }
]
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
const list3=document.createElement('li')

list.innerText="React"
skillList.append(list)
list2.innerText="Node"
skillList.append(list2)
list3.innerText="React Native"
skillList.append(list3)



const projects=document.getElementById('projects-container');
const projectlist=document.createElement('div')
projectlist.style="padding:15px"
projectlist.innerHTML="<div> Fashora</div> <div> Fashora</div> <div> Fashora</div>"

projects.append(projectlist)