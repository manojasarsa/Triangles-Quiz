const inputs = document.querySelectorAll(".angle-input")
const triangleBtn = document.querySelector("#triangle-btn")
const outputEl = document.querySelector("#outputEl")

function calculateSumOfAngles(a1,a2,a3) {
    const sumOfAngles = a1 + a2 + a3;
    return sumOfAngles;
}

function isTriangle() {
    if ((Number(inputs[0].value))>0 && (Number(inputs[1].value))>0 && (Number(inputs[2].value))>0){
        const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    
        if ( sumOfAngles === 180) {
            outputEl.innerText = "Yay! The angles form a triangle.";
        }
        else {
            outputEl.innerText = "Oops! The angles don't form a triangle."
        }
    }
    else if((Number(inputs[0].value))<0 || (Number(inputs[1].value))<0 || (Number(inputs[2].value))<0){
        outputEl.innerText = "Please enter positive values."
    }
    else{ 
        outputEl.innerText = "Please enter all three values."
    }
}

triangleBtn.addEventListener("click", isTriangle);
