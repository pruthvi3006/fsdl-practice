// Questions
let questions = [
    {
        q: "What is HTML?",
        options: ["Programming Language", "Markup Language", "Database"],
        answer: "Markup Language"
    },
    {
        q: "What is CSS used for?",
        options: ["Styling", "Logic", "Database"],
        answer: "Styling"
    },
    {
        q: "What is JavaScript?",
        options: ["Styling Tool", "Programming Language", "Browser"],
        answer: "Programming Language"
    }
];

let quizDiv = document.getElementById("quiz");

// Display questions
questions.forEach((q, i) => {
    let div = document.createElement("div");
    div.className = "question";

    div.innerHTML = `<p>${q.q}</p>` +
        q.options.map(opt =>
            `<label>
                <input type="radio" name="q${i}" value="${opt}">
                ${opt}
            </label><br>`
        ).join("");

    quizDiv.appendChild(div);
});

// Submit
function submitQuiz() {
    let score = 0;

    questions.forEach((q, i) => {
        let selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    document.getElementById("result").innerText =
        "Score: " + score + " / " + questions.length;
}