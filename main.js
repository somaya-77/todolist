//                                               variables
// get container
var container = document.getElementById("contain-parent");
// get input value
var titleNewTask = document.getElementById("title-task").value;

var descriptionTask = document.getElementById("description").value;
// add new item
var addNewItem = document.querySelector(".overlay")



// function add new item
document.getElementById("add").addEventListener("click", function () {
    addNewItem.style.transform = "scale(1)"
    titleNewTask = '';     //؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟
    descriptionTask = '';
});
// remove overlay
document.querySelector(".fa-xmark").addEventListener("click", function () {
    document.querySelector(".overlay").style.transform = "scale(0)"
})
// ///////////////////////////////////////////////////////////////////////////////////////////////
// declear objects in array for new item
let tasks = [
    {
        "title": "book",
        "description": "hufeuyer",
        "date": "15/9/2025",
        "isDone": false
    },
    {
        "title": "book",
        "description": "hufeuyer",
        "date": "15/9/2025",
        "isDone": false
    },
    {
        "title": "book",
        "description": "",
        "date": "15/9/2025",
        "isDone": false
    }
]
// builld  function for add new items in document
function fillTaskPage() {
    // remove old items
    document.getElementById("tasks").innerHTML = "";

    for (element of tasks) {
        document.getElementById("tasks").innerHTML +=
            `
                <div class="task">
                    <div>
                        <h2>${element.title}</h2>
                        <span><i class="fa-regular fa-calendar-days"></i> ${element.date}</span>
                        <p id="description">${element.description}</p>
                    </div>
                    <div>
                        <h4>Finished <i class="fa-solid fa-check"></i></h4>
                    </div>
                    <div class="icons">
                        <i class="fa-solid fa-right-to-bracket"></i>
                        <i class="fa-solid fa-fill-drip"></i>
                        <div class="changeColor">
                            <span data-color="('#f44336')" class="color-1"></span>
                            <span data-color="('#009688bd')" class="color-2"></span>
                            <span data-color="('#ffc107')" class="color-3"></span>
                            <span data-color="('#e91e63ba')" class="color-4"></span>
                            <span data-color="('#8ec06c')" class="color-5"></span>
                            <span data-color="('#ff4e00')" class="color-6"></span>
                        </div>
                        <i class="fa-solid fa-pen"></i>
                        <i class="fa-solid fa-check"></i>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                </div>
            `;
    }

}
fillTaskPage();

// function for add the item with button Done after click hem
document.getElementById("done-btn").addEventListener("click", function () {

    if (titleNewTask == " " && descriptionTask == " ") {

        return false; //????????????????????????????

    } else {
        // get date year only for put in the document
        let currentDate = new Date().toJSON().slice(0, 10);
        // get value input for put in the document
        let titleNewTask = document.getElementById("title-task").value;
        // get value input for put in the document
        let descriptionTask = document.getElementById("description").value;
        // replace to object add put values
        let titleNewTaskObj = {
            "title": titleNewTask,
            "description": descriptionTask,
            "date": currentDate,
            "isDone": false
        }

        // put the new object to array
        tasks.push(titleNewTaskObj)
        addDataToLocalStorage(tasks)
        fillTaskPage();

        // titleNewTask = " "; 
        // descriptionTask = " ";
        document.querySelector(".overlay").style.transform = "scale(0)";
    }
})
// //////////////////////////////////////
//                           localStorage
// set data to localstorage
function addDataToLocalStorage(tasks) {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
}
// get data from localstorage
function getDataFromLocalStorage() {
    let getData = window.localStorage.getItem("tasks");
    if (getData) {
        let task = JSON.parse(getData);
        fillTaskPage();
    }
}

// save items
if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
}
getDataFromLocalStorage()
// click all icons
//***************************************************************************** */
container.addEventListener("click", (eo) => {

    switch (eo.target.className) {
        case "fa-solid fa-right-to-bracket":

            break;

        case "fa-solid fa-fill-drip":

            let removeDisplay = document.getElementsByClassName("display")
            for(ele of removeDisplay){
                ele.classList.remove("display")
            }
            
            eo.target.parentElement.parentElement.querySelector(".changeColor").classList.add("display")
            break;
        // update the title & description from item

        case "fa-solid fa-pen":

            fillTaskPage();  // ???????????????
            document.querySelector(".overlay").style.transform = "scale(1)";
            break;

        // remove check mark , add x-mark & add finish 
        case "fa-solid fa-check":
            eo.target.classList.add("remove"); // ????????????????????????

            let xBtn = `<i class="fa-solid fa-x"></i>`;

            eo.target.parentElement.parentElement.querySelector("h4").style.display = "block"

            // eo.target.parentElement.parentElement.querySelector(".task").style.opacity = "0.7"
            // let finished = document.querySelector("h4");
            // finished.style.display = "block" // ???????????????????????????/

            eo.target.parentElement.innerHTML += xBtn
            break;

        // remove x-mark and finish 
        case "fa-solid fa-x":
            eo.target.parentElement.parentElement.querySelector("h4").style.display = "none";
            eo.target.classList.add("remove");
            let checkBtn = `<i class="fa-solid fa-check"></i>`;
            eo.target.parentElement.innerHTML += checkBtn;
            break;
        // remove item
        case "fa-solid fa-trash-can":
            eo.target.parentElement.parentElement.remove()
            break;

        default:
            break;
    }
})


// console.log(changeColor)
// changeColor.onclick = activeClass()

// var number =1
// function activeClass(){
//     // remove all active class
//     removeActive();

//     changeColor[number - 1].classList.add("active");
// }

// let task = document.querySelector(".task")
// function changeColor(color) {
//     task.style.background = color
// }

function removeActive() {
    changeColor.forEach(function (color) {
        color.classList.remove("active");
    })
}


var changeColorSpan = document.querySelectorAll(".changeColor span");

function ddd(){
    changeColor.forEach(span => {

        span.addEventListener("click", (e) => {
    
            console.log(e.target.dataset.color)
    
            // e.target.parentElement.parentElement.querySelector(".task").style.background = "e.target.dataset.color"
        })
    })
}
