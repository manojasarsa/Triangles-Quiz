const base = document.querySelector(".base-input")
const height = document.querySelector(".height-input")
const areaBtn = document.querySelector("#area-btn")
const outputEl = document.querySelector("#outputEl")

function calculateArea(){
    const area = ((1/2)*(base.value)*(height.value));
    outputEl.innerText = "The Area of the Triangle is : " + area + " cm²";

}

areaBtn.addEventListener("click", calculateArea);


