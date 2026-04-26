let subjects = ["Math", "Science", "English", "CS"];
let marks = [85, 78, 90, 88];
let attendance = [90, 85, 95, 92];
let progress = [40, 30, 20]; // Good, Average, Poor

// 📊 Bar Chart (Marks)
new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
        labels: subjects,
        datasets: [{
            label: "Marks",
            data: marks,
            backgroundColor: "blue"
        }]
    }
});

// 📈 Line Chart (Attendance)
new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
        labels: subjects,
        datasets: [{
            label: "Attendance %",
            data: attendance,
            borderColor: "green",
            fill: false
        }]
    }
});

// 🥧 Pie Chart (Progress)
new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
        labels: ["Good", "Average", "Poor"],
        datasets: [{
            data: progress,
            backgroundColor: ["green", "orange", "red"]
        }]
    }
});