fetch("data.json")
    .then(res => res.json())
    .then(data => {

        let labels = data.map(d => d.dept);
        let values = data.map(d => d.students);

        let ctx = document.getElementById("myChart");

        new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: "students",
                    data: values,
                    backgroundColor: ["red", "blue", "green", "orange"]
                }]
            }
        });

    });