let list = document.getElementById("list");
let dragged;

document.querySelectorAll("li").forEach(item => {

    item.addEventListener("dragstart", () => {
        dragged = item;
        item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
    });

    item.addEventListener("dragover", (e) => {
        e.preventDefault();
        let after = e.target;
        list.insertBefore(dragged, after);
    });

});