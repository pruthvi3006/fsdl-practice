function process(){
    let text=document.getElementById("input").value;

    document.getElementById("rev").innerText=text.split("").reverse().join("");
    document.getElementById("upper").innerText=text.toUpperCase();
    document.getElementById("lower").innerText =
        text.toLowerCase();

    document.getElementById("len").innerText =
        text.length;
}