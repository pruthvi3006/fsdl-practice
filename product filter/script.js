function filter(category){
    let items=document.querySelectorAll('.card');

    items.forEach(item=>{
        if(category==="all"||item.classList.contains(category)){
            item.style.display="block";
        }
        else{
            item.style.display="none"
        }
    });
}