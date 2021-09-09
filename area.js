const base = document.querySelector(".base-input")
const height = document.querySelector(".height-input")
const areaBtn = document.querySelector("#area-btn")
const outputEl = document.querySelector("#outputEl")

function calculateArea(){
    if (base.value>0 && height.value>0) {
        const area = ((1/2)*(base.value)*(height.value));
        outputEl.innerText = "The Area of the Triangle is : " + area + " cm²";
    }
    else if(base.value<0 || height.value<0){
        outputEl.innerText = "Please enter positive values."
    }
    else{ 
        outputEl.innerText = "Please enter both values."
    }
    

}

areaBtn.addEventListener("click", calculateArea);


