
let price = document.querySelector(".price");
let range = document.querySelector(".component__range");
const rangeprogress = document.querySelector(".range__progress");
const count = document.querySelector(".component__text");
const button = document.getElementById("switch-1")

price.innerHTML = `$${16}`;


const result = (value) =>{
  if(button.checked){
    price.innerHTML = `$${value - value * 0.25}`
  } else{
    price.innerHTML = `$${value}`
  }
}

range.oninput = () => {
  
  rangeprogress.style.width = `${range.value}%`;

  if (range.value > 0 && range.value <20) {
    count.innerHTML = "10K pageviews";
    result(8);
  }else if(range.value >20 && range.value <40) {
    count.innerHTML = "50K pageviews";
    result(12);
  }
   else if (range.value >40 && range.value < 60) {
    count.innerHTML = "100K pageviews";
    result(16);
  } else if (range.value > 60 && range.value <80) {
    count.innerHTML = "500K pageviews";
    result(24);
  } else if (range.value >80 && range.value<=100) {
    count.innerHTML = "1M pageviews";
    result(36);
  }
};

button.addEventListener("click", () =>{
  range.oninput()
  })