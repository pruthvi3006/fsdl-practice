// let days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

// // Data
// let temp = [30, 32, 31, 29, 33, 35, 34];
// let rain = [5, 2, 0, 3, 1, 4, 2];
// let weather = [4, 2, 1]; // Sunny, Rainy, Cloudy

// // 📈 Line Chart (Temperature)
// new Chart(document.getElementById("lineChart"), {
//     type: "line",
//     data: {
//         labels: days,
//         datasets: [{
//             label: "Temperature",
//             data: temp,
//             borderColor: "blue",
//             fill: false
//         }]
//     }
// });

// // 📊 Bar Chart (Rainfall)
// new Chart(document.getElementById("barChart"), {
//     type: "bar",
//     data: {
//         labels: days,
//         datasets: [{
//             label: "Rainfall",
//             data: rain,
//             backgroundColor: "green"
//         }]
//     }
// });

// // 🥧 Pie Chart (Weather Type)
// new Chart(document.getElementById("pieChart"), {
//     type: "pie",
//     data: {
//         labels: ["Sunny","Rainy","Cloudy"],
//         datasets: [{
//             data: weather,
//             backgroundColor: ["orange","blue","gray"]
//         }]
//     }
// });

//Use the commented code if data not given in json format
//Use the uncommented code if data is given in json file by changing the name
fetch("data.json")
    .then(res => res.json())
    .then(data => {

        // 📈 Line Chart
        new Chart(document.getElementById("lineChart"), {
            type: "line",
            data: {
                labels: data.days,
                datasets: [{
                    label: "Temperature",
                    data: data.temperature,
                    borderColor: "blue",
                    fill: false
                }]
            }
        });

        // 📊 Bar Chart
        new Chart(document.getElementById("barChart"), {
            type: "bar",
            data: {
                labels: data.days,
                datasets: [{
                    label: "Rainfall",
                    data: data.rainfall,
                    backgroundColor: "green"
                }]
            }
        });

        // 🥧 Pie Chart
        new Chart(document.getElementById("pieChart"), {
            type: "pie",
            data: {
                labels: data.weather.labels,
                datasets: [{
                    data: data.weather.values,
                    backgroundColor: ["orange","blue","gray"]
                }]
            }
        });

    });