const inputBox = document.getElementById('inputBox')
const list = document.getElementById('list');

function addTask(){
    if(inputBox.value==='')
    {
        alert("Please Write Something");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.append(li);
        let span = document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN')
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();