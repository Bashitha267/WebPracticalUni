let proceed = confirm("would you like to proceed");
if (proceed) {
    let name = prompt("Enter the student name")
    let marks = []
    for (let i = 0; i < 1; i++) {
        let sub_name = prompt("enter the subject name:")
        let sub_marks = prompt("enter the mark for" + sub_name + ":")
        sub_marks = parseInt(sub_marks, 10);
        marks.push({ 
            subject: sub_name, 
            marks: sub_marks 
        })
    }
    console.log(marks)
    const stu_name=document.getElementById("stu-name");
    stu_name.textContent=name;
    const sub_marks=document.getElementById("submarks")
    marks.map((item)=>{
        let subdiv=document.createElement("div")
        subdiv.innerText=`${item.subject}       ${item.marks}`
        sub_marks.append(subdiv)
    }
    )
    let total = marks.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.marks;  
    }, 0);
    console.log(total)
    let average=total/marks.length
    const gettotal=document.getElementById("total")
    gettotal.textContent(total)
    const getavg=document.getElementById("avg")
    getavg.textContent(average)

}















































// alert("Student Result Management System");
// let proceed = confirm("Would you like to enter the student's details?");

// if (proceed) {
//     let studentName = prompt("Please enter the student's name:");
//     let marks = [];
//     for (let i = 1; i <= 5; i++) {
//         let mark = prompt(`Enter marks for Subject ${i}:`);
//         mark = parseFloat(mark);
//         while (!Number.isFinite(mark) || mark < 0 || mark > 100) {
//             mark = prompt('INVALID INPUT!!!..Use Only Numbers between 0 and 100');
//             mark = parseFloat(mark);
//         }
//         marks.push(mark);
//     }
//     let total = 0;
//     for(let i = 0; i < marks.length; i++){
//         total += marks[i];
//     }
//     let average = total / marks.length;
//     let percentage = (total / 500) * 100;

//     let grade = '';
//     if (percentage >= 75) {
//         grade = 'A';
//     } else if (percentage >= 60) {
//         grade = 'B';
//     } else if (percentage >= 50) {
//         grade = 'C';
//     } else {
//         grade = 'Fail';
//     }

//     document.getElementById('student-name').innerText = `Student Name: ${studentName}`;

//     let marksList = document.getElementById('marks-list');
//     marksList.innerHTML = '';
//     marks.forEach((mark, index) => {
//         let listItem = document.createElement('li');
//         listItem.innerText = `Subject ${index + 1}: ${mark}`;
//         marksList.appendChild(listItem);
//     });

//     document.getElementById('total').innerText = total;
//     document.getElementById('average').innerText = Math.round(average);
//     document.getElementById('percentage').innerText = Math.round(percentage);

//     let gradeElement = document.getElementById('grade');
//     gradeElement.innerText = `Grade: ${grade}`;

//     if (grade === 'Fail') {
//         gradeElement.classList.add('fail');
//     } else {
//         gradeElement.classList.add('pass');
//     }

//     alert(`Result for ${studentName}:\nTotal: ${total}\nAverage: ${Math.round(average)}%\nGrade: ${grade}`);
// }
