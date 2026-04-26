let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    let input = document.getElementById("taskinput");
    let task = input.value;

    if (task === "") return;

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();
    input.value = "";
}

function showTasks() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    tasks.forEach((task, i) => {
        let li = document.createElement("li");
        li.innerText = task;

        let delbtn = document.createElement("button");
        delbtn.innerText = "Delete";

        delbtn.onclick = function () {
            tasks.splice(i, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showTasks();
        };

        li.appendChild(delbtn);
        list.appendChild(li);
    });
}

showTasks();