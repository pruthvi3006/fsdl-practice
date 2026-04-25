let ctx=document.getElementById("myChart");

new Chart(ctx,{
    type:"doughnut",
    data:{
        labels:["CS","IT","ENTC","MECH"],
        datasets:[{
            label:"students",
            data:[80,70,90,50],
           backgroundColor: ["red", "blue", "green", "orange"]
        }]
    },
    
});