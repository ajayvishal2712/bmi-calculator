// const hei = document.getElementById("height");
// const wei = document.getElementById("weight");
const btn1 = document.getElementById("btn");
const res = document.getElementById("bmi-result");
const cond = document.getElementById("weight-condition");

function bmiCal(){

    const hei = document.getElementById("height").value/100;
    const wei = document.getElementById("weight").value;

const bmiValue = wei / (hei * hei);

res.value = bmiValue.toFixed(2);

 if (bmiValue < 18.5) {
    cond.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    cond.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    cond.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    cond.innerText = "Obesity";
  }
}

btn1.addEventListener("click", bmiCal);

