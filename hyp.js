const sides = document.querySelectorAll(".side-input")
const hypBtn = document.querySelector("#hyp-btn")
const outputEl = document.querySelector("#outputEl")

function calculateSumOfSquares(a,b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    if ((Number(sides[0].value))>0 && (Number(sides[1].value))>0) {
        const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        outputEl.innerText = "The length of third side (Hypotenuse) is : " + lengthOfHypotenuse.toFixed(2);
    }
    else if((Number(sides[0].value))<0 || (Number(sides[1].value))<0){
        outputEl.innerText = "Please enter positive values."
    }
    else{ 
        outputEl.innerText = "Please enter both values."
    }
}

hypBtn.addEventListener("click", calculateHypotenuse);
