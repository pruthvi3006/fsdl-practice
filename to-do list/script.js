function addTask(){
let input=document.getElementById("taskinput");
let task=input;
if(task==="")return;
let li = document.createElement("li");
li.innerText=task.value;

let delbtn=document.createElement("button");
delbtn.innerText="Delete";

delbtn.onclick=function (){
    li.remove();
}

li.appendChild(delbtn);
document.getElementById("list").appendChild(li);
input.value="";
}