const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("List-container")
function Addtask(){
    if(inputBox.value===''){
        alert("you must write something!")
    }
    else{
        //creating html element of li inside of un order list 
        let li=document.createElement("li")
        // passing that input values into that li using Js 
        //Some changes for test access in github
        li.innerHTML=inputBox.value
        //adding that html element where you exactly wants
        listContainer.appendChild(li)
        

        // here i am creating one span element directly in js then adding delete image code into that,then appending/adding where u wants to
        // here i am creating one span element directly in js then adding delete image code into that,then appending/adding where u wants to
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
        //after adding inputbox should be empty
        //after adding inputbox should be empty
        //after adding inputbox should be empty
        
    inputBox.value='';
    saveData();
}
   

    listContainer.addEventListener("click",function(e){
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked")
            saveData()
        }
      
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove()
            saveData()
        }
    },false)

    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
        
    }
    function showTask(){
        listContainer.innerHTML=localStorage.getItem("data");
    }
    showTask();


