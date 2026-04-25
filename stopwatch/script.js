let sec=0;
let min=0;
let hr=0;

let timer;

function update(){
    sec++;
    if(sec==60){
        sec=0;
        min++;
    }
    if(min==60){
        min=0;
        hr++;
    }
        document.getElementById("timer").innerText =
        String(hr).padStart(2, '0') + ":" +
        String(min).padStart(2, '0') + ":" +
        String(sec).padStart(2, '0');
}

function start(){
    if(!timer){
        timer=setInterval(update,1000);
    }
}
function stop(){
    clearInterval(timer);
    timer=null;
}
function reset(){
    stop();
    sec=min=hr=0;
    document.getElementById("timer").innerText="00:00:00";
}