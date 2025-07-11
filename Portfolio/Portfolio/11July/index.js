console.log("Hello")
const button=document.getElementById("myButton")
const mydiv=document.getElementById("myDiv")
const output=document.getElementById("output")
const output1=document.getElementById("output1")
const output2=document.getElementById("output2")
var handleClick=()=>{
    alert("button clicked")
}
button.addEventListener("click",handleClick)

const handleMouseOver=()=>{
    mydiv.style.backgroundColor="yellow"
}
mydiv.addEventListener("mouseover",handleMouseOver)
const handleMouseOut=()=>{
    mydiv.style.backgroundColor="lightblue"
}
mydiv.addEventListener("mouseout",handleMouseOut)

const clicked=document.getElementById("clicked")
const dblclicked=document.getElementById("dblClicked")
// const handleSingleClick=()=>{
//     alert("single click")
// }
// const hadnleDoubleClick=()=>{
//     alert("dbl dlcied")
// }
output.style.backgroundColor="	#E0E0E0"
clicked.addEventListener("click",function(event){
    output.innerHTML="single Clicked"
    +JSON.stringify(event) 
})

dblclicked.addEventListener("dblclick",(event)=>{
    output.innerHTML="Double Clicked "+JSON.stringify(event) 
})

document.addEventListener('keydown',(event)=>{
    output1.innerHTML="Key pressed:"+event.key
})

document.addEventListener('keypress',(event)=>{
    output2.innerHTML="Key pressed:"+event.key
})