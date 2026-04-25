const searchInput=document.getElementById("search");

searchInput.addEventListener("keyup", function(){
    let filter=searchInput.value.toLowerCase();
    let rows=document.querySelectorAll("#tagTable tr");

    for(let i=1;i<rows.length;i++){
        let text=rows[i].innerText.toLowerCase();
        if(text.includes(filter)){
            rows[i].style.display=" ";
        }
        else{
            rows[i].style.display="none";
        }
    }
})