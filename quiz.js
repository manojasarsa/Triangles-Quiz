const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#outputEl");

const correctAns = ["90°", "right-angled"];

function calculateScore() {
    let score=0;
    let index=0;
    const formResults = new FormData(quizForm);
    for ( let value of formResults.values()) {
        if (value === correctAns[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    outputEl.innerText = "Your score is : " + score;
}

submitBtn.addEventListener("click", calculateScore);