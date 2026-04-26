async function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let branch = document.getElementById("branch").value;

    await fetch("/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, roll, branch })
    });

    loadStudents();
}

async function loadStudents() {
    let res = await fetch("/students");
    let data = await res.json();

    let table = document.getElementById("table");
    table.innerHTML = "";

    data.forEach(s => {
        table.innerHTML += `
        <tr>
            <td>${s.name}</td>
            <td>${s.roll}</td>
            <td>${s.branch}</td>
        </tr>`;
    });
}

loadStudents();