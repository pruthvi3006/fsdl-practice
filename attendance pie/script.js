// let ctx = document.getElementById("myChart").getContext("2d");

// new Chart(ctx, {
//     type: "doughnut", // change to "pie" if needed
//     data: {
//         labels: ["Present", "Absent", "Leave"],
//         datasets: [{
//             data: [70, 20, 10],
//             backgroundColor: ["green", "red", "orange"]
//         }]
//     }
// }); This code if data is not given in json format

//If data given in json format
fetch("data.json")
    .then(res => res.json())
    .then(data => {

        let ctx = document.getElementById("myChart").getContext("2d");

        new Chart(ctx, {
            type: "doughnut", // or "pie"
            data: {
                labels: data.labels,
                datasets: [{
                    data: data.values,
                    backgroundColor: ["green", "red", "orange"]
                }]
            }
        });

    });