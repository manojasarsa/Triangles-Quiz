const inputs = document.querySelectorAll(".angle-input")
const triangleBtn = document.querySelector("#triangle-btn")
const outputEl = document.querySelector("#outputEl")

function calculateSumOfAngles(a1,a2,a3) {
    const sumOfAngles = a1 + a2 + a3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

    if ( sumOfAngles === 180) {
        outputEl.innerText = "Yay! The angles form a triangle.";
    }
    else {
        outputEl.innerText = "Oops! The angles don't form a triangle."
    }
}

triangleBtn.addEventListener("click", isTriangle);