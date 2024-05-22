//  formula - bmi = kg/ (h/100 * h/100)

document.getElementById("submit").addEventListener("click", getBMI);

function getBMI() {
  let cm = parseInt(document.getElementById("cm").value);
  let kg = parseInt(document.getElementById("kg").value);
  let bmi;
  let newcm = parseInt(cm / 100);
  bmi = kg / (newcm * newcm);
  document.getElementById("result").innerHTML = "Your BMI is: " + bmi + "😊";
}
