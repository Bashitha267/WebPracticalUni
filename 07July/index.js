// let arr=[{
//     name:"nimesh",
//     age:15,
//     city:"Negombo"
// },
// {
//     name:"bashitha",
//     age:16,
//     city:"Gampaha"
// },
// ]
// const container = document.getElementById('cls');
// arr.map((item)=>{
// const p=document.createElement('p')

//     p.textContent=`Age:${item.age}`
//     container.append(p)

// })
const people = [
    {
      name: "Alice Johnson",
      address: "123 Maple St, Springfield",
      age: 28,
      description: "Loves hiking and outdoor adventures."
    },
    {
      name: "Bob Smith",
      address: "456 Oak Ave, Rivertown",
      age: 34,
      description: "A passionate cook and food blogger."
    },
    {
      name: "Carla Diaz",
      address: "789 Pine Rd, Lakeside",
      age: 22,
      description: "Student of graphic design and photography."
    },
    {
      name: "David Lee",
      address: "321 Elm St, Metro City",
      age: 40,
      description: "Tech enthusiast and software developer."
    },
    {
      name: "Emma Brown",
      address: "654 Cedar Blvd, Mountainview",
      age: 30,
      description: "Yoga instructor and wellness coach."
    },
    {
      name: "Frank Wilson",
      address: "987 Spruce Dr, Seaside",
      age: 45,
      description: "Enjoys sailing and marine biology."
    },
    {
      name: "Grace Kim",
      address: "147 Birch Ln, Valley Town",
      age: 26,
      description: "Aspiring writer and poet."
    },
    {
      name: "Hassan Ali",
      address: "258 Walnut St, Riverside",
      age: 33,
      description: "Photographer who loves nature shots."
    },
    {
      name: "Ivy Chen",
      address: "369 Chestnut Ct, Hilltop",
      age: 29,
      description: "Graphic designer and coffee lover."
    },
    {
      name: "Jack Turner",
      address: "159 Magnolia Rd, Brookfield",
      age: 38,
      description: "Musician and vinyl record collector."
    }
  ];
  
let isClicked=false
const changeStyle=()=>{
    const btn=document.getElementById('btn1');

    btn.style.backgroundColor="red"
}

const showMessage=()=>{
    isClicked=!(isClicked)
    let msg=document.getElementById('clickMe');
    if(isClicked===true){
        
        msg.style.display='flex'
    }
    else msg.style.display='none'
    
}
const changeText=()=>{
   
    ptag=document.getElementsByTagName('p')
    console.log(ptag[0])
    console.log(ptag[1])
    const bg=document.getElementById('pr1')
    bg.style.backgroundColor='black'
    bg.style.color='white'
}

let container=document.getElementById('data')
people.map((item)=>{
   const box=document.createElement('div');
    box.className="bg-gray-100 mb-4 mt-4 mx-4 p-3"
    box.style.width="40vh"
//    box.className
    box.innerHTML=`
        
        <div class="" >Name:${item.name}<div id="name"></div>
        <div id="age">age:${item.age}</div></div>

<div id="address">address:${item.address}</div>
<div id="des">${item.description} quibusdam cum cumque magni minus tenetur? Eius, vero libero?</div>







    
    </div>
    `
    container.appendChild(box)

})